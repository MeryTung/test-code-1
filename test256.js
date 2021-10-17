/**
 * 两数之和等于某个值
 */
const arr = [1.5, 5, 1, 2, 3, 8, 4, 6, 7]
const target = 7

; (function () {

  function searchSum(arr, target) {
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

  console.log(searchSum(arr, target))

})();

(function () {

  function searchSum(arr, target) {
    const set = new Set()
    const res = []

    for (let i = 0; i < arr.length; i++) {
      const value = target - arr[i]
      if (value < 0) {
        continue
      }
      if (set.has(arr[i])) {
        res.push([value, arr[i]])
      } else {
        set.add(value)
      }
    }

    return res
  }

  console.log(searchSum(arr, target))

})();