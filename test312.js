const nums = [1, 2, 1, 2, 3, 2, 1]

;(function () {

  // 一个整数数组 nums ，除某个元素仅出现 一次 外，其余每个元素都恰出现 三次 。找出并返回那个只出现了一次的元素。

  function getSingleNumber (nums) {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
      let j = i
      if (map.get(nums[j]) >= 3) {
        continue
      }
      while (j !== -1) {
        map.set(nums[j], (map.get(nums[j]) || 0) + 1)
        j = nums.indexOf(nums[j], j + 1)
      }
    }
    for (let [num, count] of map.entries()) {
      if (count === 1) {
        return num
      }
    }
  }
  
  console.time('getSingleNumber1')
  console.log(getSingleNumber(nums))
  console.timeEnd('getSingleNumber1')

})();

;(function () {

  function getSingleNumber (nums) {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
      map.set(nums[i], (map.get(nums[i]) || 0) + 1)
    }
    for (let [num, count] of map.entries()) {
      if (count === 1) {
        return num
      }
    }
  }

  console.time('getSingleNumber2')
  console.log(getSingleNumber(nums))
  console.timeEnd('getSingleNumber2')

})();
