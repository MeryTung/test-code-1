;(function () {

  function setData (data, cb) {
    const keys = Object.keys(data)
    keys.forEach(key => {
      const arr = []
      const _keys = key.split('.')
      _keys.forEach(_key => {
        const reg = /(\w+)?(\[(\d+)\])/g
        let matched
        let mark = false
        while (matched = reg.exec(_key)) {
          mark = true
          if (matched[1]) {
            arr.push(matched[1])
          }
          if (matched[3]) {
            arr.push(+matched[3])
          }
        }
        if (!mark) {
          arr.push(_key)
        }
      })
      arr.reduce((obj, prop, index) => {
        if (index === arr.length - 1) {
          return (obj[prop] = data[key])
        }
        if (obj[prop]) {
          return obj[prop]
        }
        if (typeof arr[index + 1] === 'number') {
          return (obj[prop] = [])
        }
        return (obj[prop] = {})
      }, this.data)
    })
    cb && cb()
  }

  const obj = {
    data: {
      a: {
        b: {
          c: [1, {d: 'ddd'}]
        }
      },
      b: {}
    },
    setData
  }

  obj.setData({
    'e.f.g[2].h': 123,
    'a.b.c[0]': 1000,
    'i[0][0][1]': -1,
    'b[100]': [0, 1, 2, 3]
  })
  console.log(obj.data.e.f.g[2])
  console.log(obj.data.a.b.c)
  console.log(obj.data.i)
  console.log(obj.data.b)

})();
