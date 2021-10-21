;(function () {

  function splitArrayByNum (arr, num) {
    return arr.reduce((res, item, index) => {
      if (index % num === 0) {
        res.push([])
      }
      res[res.length - 1].push(item)
      return res
    }, [])
  }

  console.time('splitArrayByNum1')
  console.log(splitArrayByNum([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3))
  console.timeEnd('splitArrayByNum1')

})();

;(function () {

  function splitArrayByNum (arr, num) {
    const res = []
    let i = 0
    while (i < arr.length) {
      if (i % 3 === 0) {
        res.push([])
      }
      res[res.length - 1].push(arr[i])
      i++
    }
    return res
  }

  console.time('splitArrayByNum2')
  console.log(splitArrayByNum([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3))
  console.timeEnd('splitArrayByNum2')

})();

;(function () {

  function splitArrayByNum (arr, num) {
    const res = []
    while (arr.length) {
      res.push(arr.splice(0, 3))
    }
    return res
  }

  console.time('splitArrayByNum3')
  console.log(splitArrayByNum([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3))
  console.timeEnd('splitArrayByNum3')

})();