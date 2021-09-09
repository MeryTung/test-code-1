;(function () {


  const entry = {
    a: {
      b: {
        c: {
          dd: 'abcdd'
        },
        f: {
          g: 'abcfg'
        }
      },
      d: {
        xx: 'adxx'
      },
      e: 'ae'
    }
  }
  
  const output = {
    'a.b.c.dd': 'abcdd',
    'a.d.xx': 'adxx',
    'a.e': 'ae'
  }

  function mapDataPathAndValue (data) {
    const map = {}

    function buildMap (key, value) {
      key = Array.isArray(key) ? key : [key]
      if (typeof value === 'object') {
        Object.keys(value).forEach(_key => {
          buildMap(key.concat(_key), value[_key])
        })
      } else {
        map[key.join('.')] = value
      }
    }

    buildMap([], data)

    return map
  }

  console.log(mapDataPathAndValue(entry))


})();