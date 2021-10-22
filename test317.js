;(function () {

  // 三数之和最接近某个值

  const arr = [0, 4, 2, 9, 10, 7, 6, 5]

  function sum (arr, target) {
    const _arr = []
    for (let i = 0; i < arr.length; i++) {
      let left = i + 1
      let right = arr.length - 1
      while (left < right) {
        _arr.push([arr[i], arr[left], arr[right]])
        right--
      }
      left++
      right = arr.length - 1
      while (left < right) {
        _arr.push([arr[i], arr[left], arr[right]])
        left++
      }
    }

    const minStep = Math.min(..._arr.map(item => Math.abs(item.reduce((a, b) => a + b) - target, 0)))
    
    return _arr.reduce((res, item) => {
      const sum = item.reduce((a, b) => a + b, 0)
      if (Math.abs(sum - target) === minStep) {
        res.push(item)
      }
      return res
    }, [])
  }

  console.log(sum(arr,30))

})();