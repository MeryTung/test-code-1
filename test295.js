; (function () {

  const obj = {
    a: 1,
    b: {
      c: 1
    }
  }


  function get(obj, path) {
    const arr = path.split('.')
    let i = 0
    let res

    function _get(value) {
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
  console.log(get(obj, 'a.b2.c'))


})();