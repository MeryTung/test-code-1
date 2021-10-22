;(function () {

  // 三数之和最接近某个值

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

    const minStep = Math.min(..._arr.map(item => {
      const sum = item.reduce((a, b) => a + b, 0)
      return Math.abs(sum - target)
    }))
    
    return _arr.reduce((res, item) => {
      const sum = item.reduce((a, b) => a + b, 0)
      if (Math.abs(sum - target) === minStep) {
        res.push(item)
      }
      return res
    }, [])
  }

  console.log(sum([-1, 2, 1, -4], 1))
  console.log(sum([0, 4, 2, 9, -8, 7, -3, 6, 5], 1))
  console.log(sum([0, 4, 2, 9, -8, 7, -3, 6, 5], -1))
  console.log(sum([-1, -2, -3, -4, -5, -6, -7, -8, -9], -6))

})();

;(function () {

  function sum (arr, target) {
    arr.sort((a, b) => a - b)
    let minSum = arr[0] + arr[1] + arr[2]
    for (let i = 0; i < arr.length; i++) {
      let left = i + 1
      let right = arr.length - 1
      while (left < right) {
        const _sum = arr[i] + arr[left] + arr[right]
        if (_sum > target) {
          right--
        } else if (_sum < target) {
          left++
        } else {
          return _sum
        }
        if (Math.abs(_sum - target) < Math.abs(minSum - target)) {
          minSum = _sum
        }
      }
    }

    return minSum
  }

  console.log(sum([-1, 2, 1, -4], 1))
  console.log(sum([0, 4, 2, 9, -8, 7, -3, 6, 5], 1))
  console.log(sum([0, 4, 2, 9, -8, 7, -3, 6, 5], -1))
  console.log(sum([-1, -2, -3, -4, -5, -6, -7, -8, -9], -6))
})();
