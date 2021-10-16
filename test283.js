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
      e: 'ae',
      f: [1, 2, 3]
    }
  }
  
  const output = {
    'a.b.c.dd': 'abcdd',
    'a.d.xx': 'adxx',
    'a.e': 'ae'
  }

  function mapDataPathAndValue (data) {
    const map = {}
    const type = value => Object.prototype.toString.call(value).replace(/\[\w+\s(\w+)\]/, ($0, $1) => $1)

    function buildMap (key, value) {
      // key = Array.isArray(key) ? key : [key]
      if (type(value) === 'Object') {
        Object.keys(value).forEach(_key => {
          // buildMap(key.concat(_key), value[_key])
          buildMap(key + _key, value[_key])
        })
      } else {
        // map[key.join('.')] = value
        map[key] = value
      }
    }

    // buildMap([], data)
    buildMap('', data)

    return map
  }

  console.log(mapDataPathAndValue(entry))


})();