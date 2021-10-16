;(function () {

  // test60.js

  /**
   * 扁平化数组，适合对元素类型不敏感并且每个元素都是基本数据类型的场景
   * @param {*} arr 
   * @returns 
   */
  function formatArr1 (arr) {
    return arr.toString().split(',')
  }

  console.log(formatArr1([1, 2, [3, 4, 5, [6, 7, 8, [9, [10]]]]]))

  /**
   * 通用
   * @param {*} arr 
   */
  function formatArr2 (arr) {
    let res = []
    arr.forEach(item => {
      if (Array.isArray(item)) {
        res = res.concat(formatArr2(item))
      } else {
        res.push(item)
      }
    })
    return res
  }

  console.log(formatArr2([1, 2, [3, 4, 5, [6, 7, 8, [9, [10]], {a: 1}, new Date()]]]))

})();