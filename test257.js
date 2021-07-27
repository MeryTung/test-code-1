/**
 * 三数之和等于某个值
 */
;(function () {

  const arr = [6, 1, 7, 2, 3, 4, 9, 5, 6, 7, 8]
  const target = 9

  function sum (arr, target) {
    arr = arr.sort((a, b) => a - b)

    const res = []
    let left
    let right
    let fixedVal

    for (let i = 0; i < arr.length; i++) {
      fixedVal = arr[i]
      left = i + 1
      right = arr.length - 1
      while (left < right) {
        const sum = arr[left] + arr[right] + fixedVal
        if (sum > target) {
          right -= 1
        } else if (sum < target) {
          left += 1
        } else {
          res.push([fixedVal, arr[left++], arr[right--]])
        }
      }
    }
    
    return res
  }

  console.log(sum(arr, target))

})();