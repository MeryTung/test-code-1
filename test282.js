; (function () {



  const arr = [1, 'a', { b: 2 }, 'a', { b: 2 }, '1', 1, [1, 2], [1, 2], {a: 1, b: [{c: 3}]}]

  function unique(arr) {
    const map = new Map()

    arr.forEach(item => {
      if (typeof item !== 'object') {
        map.set(item, item)
      } else {
        map.set(JSON.stringify(item), item)
      }
    })

    return Array.from(map.values())
  }

  console.log(unique(arr))

})();

(function () {

  return

  const arr = [
    1, 
    'a', 
    { b: 2 }, 
    'a', 
    { b: 2 }, 
    '1', 
    1, 
    { a: 1, b: { c: 2 } }, 
    [1, 2, 3], 
    [1, 2], 
    [1, 2, 3], 
    { a: 1, b: { c: 2 } }
  ]

  function unique(arr) {
    const _numArr = []
    const _strMap = {}
    const _strArr = []

    const _map = {}
    const _arr = []
    const type = value => {
      return Object.prototype.toString.call(value).replace(/\[\w+\s(\w+)\]/, ($0, $1) => {
        return $1
      })
    }
    arr.forEach((item, index) => {
      // 还可以添加其他的类型
      if (typeof item === 'object') {
        const key = JSON.stringify(item)
        if (!_map[key]) {
          _map[key] = item
        }
      } else {
        if (!_arr.includes(item)) {
          _arr.push(item)
        }
      }
    })
    return _arr.concat(Object.values(_map))
  }

  console.log(unique(arr))

})();

(function () {

  return

  // 下面两个函数对比类型只涉及到了 object 和 array，实现又点矬，后面再优化

  function isSameArr (arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
      return false
    }

    if (arr1.length !== arr2.length) {
      return false
    }

    for (let i = 0; i < arr1.length; i++) {
      if (Object.prototype.toString.call(arr1[i]) !== Object.prototype.toString.call(arr2[i])) {
        return false
      }
      if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
        if (!isSameArr(arr1[i], arr2[i])) {
          return false
        }
      } else if (Object.prototype.toString.call(arr1[i]) === '[object Object]' && Object.prototype.toString.call(arr2[i]) === '[object Object]') {
        if (!isSameObj(arr1[i], arr2[i])) {
          return false
        }
      } else if (arr1[i] !== arr2[i]) {
        return false
      }
    }

    return true
  }

  function isSameObj (obj1, obj2) {
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
      return false
    }

    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
      return false
    }

    const keys = Object.keys(obj1)
    for (let i = 0; i < keys.length; i++) {
      if (!obj2.hasOwnProperty(keys[i])) {
        return false
      }
      if (Object.prototype.toString.call(obj1[keys[i]]) !== Object.prototype.toString.call(obj2[keys[i]])) {
        return false
      }
      if (Object.prototype.toString.call(obj1[keys[i]]) === '[object Object]' && Object.prototype.toString.call(obj2[keys[i]]) === '[object Object]') {
        if (!isSameObj(obj1[keys[i]], obj2[keys[i]])) {
          return false
        }
      } else if (Object.prototype.toString.call(obj1[keys[i]]) === '[object Array]' && Object.prototype.toString.call(obj2[keys[i]]) === '[object Array]') {
        if (!isSameArr(obj1[keys[i]], obj2[keys[i]])) {
          return false
        }
      } else if (obj1[keys[i]] !== obj2[keys[i]]) {
        return false
      }
    }

    return true
  }

  return

  console.log(isSameArr([1, 2], [1, 2]))
  console.log(isSameArr([1, 2], [1, 2, 3]))
  console.log(isSameArr([1, 2, {a: 1}], [1, 2, {a: 1}]))

  console.log('--------------------')

  console.log(isSameObj(
    {a: 1},
    {a: 1}
  ))

  console.log(isSameObj(
    {a: 1, b: 2},
    {a: 1}
  ))

  console.log(isSameObj(
    1,
    {a: 1}
  ))

  console.log(isSameObj(
    {a: 1, b: {c: 2}},
    {a: 1, b: {c: 2}}
  ))

  console.log(isSameObj(
    {a: 1, b: {c: 2, d: [1]}},
    {a: 1, b: {c: 2, d: [1]}}
  ))

  console.log(isSameObj(
    {a: 1, b: {c: 2, d: [2]}},
    {a: 1, b: {c: 2, d: [1]}}
  ))

  console.log(isSameObj(
    {a: 1, b: {c: 2, d: [1, {a: 1}]}},
    {a: 1, b: {c: 2, d: [1, {a: 1}]}}
  ))

})();
