;(function () {

  // 两个数字，根据数字从小到大的顺序给对应字母排序，返回一个数组

  function sort (arr1, arr2) {
    const arr = []
    for (let i = 0; i < arr1.length; i++) {
      arr.push({
        char: arr1[i],
        num: arr2[i]
      })
    }
    return arr.sort((a, b) => a.num - b.num).map(item => item.char)
  }

  console.log(sort(['A', 'B', 'C', 'D', 'E'], [0, 9, 2, 6, 5]))

})();