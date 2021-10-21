;(function () {

  return

  // 获取数组中出现最多的字符及次数
  const arr = [3, 0, 0, 1, 2, 3, 4, 5, 4, -1, 9, 4, 0, '1', '1', '1']

  function getMaxSubstr (arr) {
    const map = new Map()
    for (let i = 0; i < arr.length; i++) {
      map.set(arr[i], (map.get(arr[i]) || 0 ) + 1)
    }
    
    const _arr = []
    for (const [key, value] of map.entries()) {
      _arr.push({ key, value })
    }
    
    const max = Math.max(..._arr.map(item => item.value))
    
    return _arr.reduce((res, item) => {
      if (item.value === max) {
        res.push(item)
      }
      return res
    }, [])
  }

  console.log(getMaxSubstr(arr))

})();

;(function () {

  // 获取字符串中出现最多的字符及次数和位置
  const str = 'hello010o'

  function getMaxSubstrAndPosition (str) {
    const map = new Map()
    const res = []
    for (let i = 0; i < str.length; i++) {
      if (map.has(str[i])) {
        continue
      }
      map.set(str[i], true)
      
      const reg = new RegExp(str[i], 'g')
      const substrArr = []
      let tempRes = null
      while (tempRes = reg.exec(str)) {
        substrArr.push({
          key: str[i],
          index: tempRes.index
        })
      }

      res.push(substrArr)
    }
    
    const maxLength = Math.max(...res.map(item => item.length))
    return res.reduce((res,  item) => {
      if (item.length === maxLength) {
        res.push({
          num: item.length,
          key: item[0].key,
          idxs: item.map(_item => _item.index)
        })
      }
      return res
    }, [])
  }

  console.time('getMaxSubstrAndPosition1')
  console.log(getMaxSubstrAndPosition(str))
  console.timeEnd('getMaxSubstrAndPosition1')

})();

;(function () {

  // 获取数组中出现最多的字符及次数和位置
  const str = 'hello010o'
  const arr = str.split('')

  function getMaxSubstrAndPosition (arr) {
    const map = new Map()
    for (let i = 0; i < arr.length; i++) {
      const value = map.get(arr[i]) || {
        num: 0,
        idxs: []
      }
      map.set(arr[i], {
        num: ++value.num,
        idxs: value.idxs.concat(i)
      })
    }

    const res = []
    let maxLength = 1
    for (let [key, value] of map.entries()) {
      res.push({
        key,
        ...value
      })
      maxLength = Math.max(value.num, maxLength)
    }

    return res.reduce((res, item) => {
      if (item.num === maxLength) {
        res.push(item)
      }
      return res
    }, [])
  }

  // 速度更快些
  console.time('getMaxSubstrAndPosition2')
  console.log(getMaxSubstrAndPosition(arr))
  console.timeEnd('getMaxSubstrAndPosition2')

})();