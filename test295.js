; (function () {

  const obj = {
    a: 1,
    b: {
      c: {
        d: 123
      }
    }
  }


  function get(obj, path) {
    const arr = path.split('.')
    let i = 0
    let res

    function _get(value) {
      if (i === arr.length) {
        return (res = value)
      }
      if (typeof value === 'object') {
        const keys = Object.keys(value)
        for (let j = 0; j < keys.length; j++) {
          const _key = keys[j]
          if (_key === arr[i]) {
            i++
            _get(value[_key])
            return
          }
        }
        res = 'error'
      } else {
        if (i !== arr.length) {
          res = 'error'
        } else {
          res = value
        }
      }
    }

    _get(obj)

    return res
  }

  console.log(get(obj, 'b.c'))
  console.log(get(obj, 'b.c.d'))
  console.log(get(obj, 'b.c.d.e'))
  console.log(get(obj, 'a.b2.c'))

  console.log('------------------------')
})();

; (function () {

  const obj = {
    a: 1,
    b: {
      c: {
        d: 123
      }
    }
  }


  function get(path) {
    const arr = path.split('.')
    let i = 0
    let res

    return function _get(value) {
      if (i === arr.length) {
        res = value
      } else if (typeof value === 'object') {
        const keys = Object.keys(value)
        for (let j = 0; j < keys.length; j++) {
          const _key = keys[j]
          if (_key === arr[i]) {
            i++
            return arguments.callee(value[_key])
          }
        }
        res = 'error'
      } else {
        if (i !== arr.length) {
          res = 'error'
        } else {
          res = value
        }
      }
      return res
    }
  }

  console.log(get('b.c')(obj))
  console.log(get('b.c.d')(obj))
  console.log(get('acb.c')(obj))
  console.log(get('b.c.d.e')(obj))

})();