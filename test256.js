/**
 * 两数之和等于某个值
 */
;(function () {

  const arr = [5, 1, 2, 3, 8, 4,  6, 7]
  const target = 7

  function sum (arr, target) {
    arr = arr.sort((a, b) => a - b)
    const res = []
    let left = 0
    let right = arr.length - 1
    while (left < right) {
      const sum = arr[left] + arr[right]
      if (sum > target) {
        right -= 1
      } else if (sum < target) {
        left += 1
      } else {
        res.push([arr[left++], arr[right--]])
      }
    }
    return res
  }

  console.log(sum(arr, target))

})();