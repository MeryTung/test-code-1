const data = {
  a: { 
    b: { 
      c: 100 
    },
    d: {
      e: {
        f: 200
      }
    }
  },
  g: {
    h: 300
  }
}

; (function () {

  function getValueByPath (path, data) {
    let val = data
    const arr = path.split('.')
    while (arr.length && val[arr[0]]) {
      val = val[arr.shift()]
    }
    return val
  }

  console.log(getValueByPath('a.b.c', data)) // 100
  console.log(getValueByPath('a.d.e', data)) // { f: 200 }

})();

;(function () {

  function mapDataPathAndValue (data, path = [], map = {}) {
    Object.keys(data).forEach(key => {
      const _path = path.concat(key)
      const value = data[key]
      if (typeof value === 'object') {
        mapDataPathAndValue(value, _path, map)
      } else {
        map[_path.join('.')] = value
      }
    })
    return map
  }

  console.log(mapDataPathAndValue(data)) // { 'a.b.c': 100, 'a.d.e.f': 200, 'g.h': 300 }

})();