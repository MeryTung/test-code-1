
;(function () {

  const obj = {
    a: {
      b: {
        c: {
          d: {
            list: [1, [{a: [-1, -2]}, [100, 200, 300]], 4]
          }
        }
      }
    },
    e: [[[[100, 200]]]],
    c: {
      d: [0, 1, 2, 3]
    }
  }

  // { 'a.b': [1, 0, 5, 6] }
  function $spliceData (data) {
    const keys = Object.keys(data)
    keys.forEach(key => {
      let _obj
      const _keys = key.split('.')
      const arr = _keys.reduce((cur, pre) => {
        _obj = cur
        const reg = /(\w+)?(\[(\d+)\])/g
        let matched
        let mark = false
        while (matched = reg.exec(pre)) {
          mark = true
          if (matched[1]) {
            _obj = _obj[matched[1]]
          }
          if (matched[3]) {
            _obj = _obj[matched[3]]
          }
        }
        if (mark) return _obj
        return _obj[pre]
      }, obj)
      arr.splice(data[key][0], data[key][1], ...data[key].slice(2))
    })
  }

  $spliceData({
    'a.b.c.d.list[1][0].a': [1, 0, ...[99, 98, 97, 96]],
    'e[0][0][0]': [1, 0, ...[-1, -2, -3]],
    'c.d': [0, obj.c.d.length]
  })

  console.log(obj.a.b.c.d.list[1][0].a)  // [ -1, 99, 98, 97, 96, -2 ]
  console.log(obj.e[0][0][0]) // [ 100, -1, -2, -3, 200 ]
  console.log(obj.c.d) // []

})();

;(function () {
  return

   const str = 'a.b.c.d.list'
 
  const arr = str.split('.')

  const res = arr.reduce((cur, pre) => {
    return cur[pre]
  }, obj)

  console.log(res)

  res.splice(1, 0, ...[0, 1, 2, 3, 4])
  
  console.log(res)
})();

;(function () {
  return

  const str = 'list[0][1][2]'

  const reg = /([a-z]+)?(\[(\d+)\])/g

  let matched
  while (matched = reg.exec(str)) {
    console.log(matched)
  }

})();
