;(function () {

  // 使用斐波那契算法计算楼梯问题

  // 假设一个人从地面开始爬楼梯，规定一步只能爬一坎或者两坎，人只能往上走
  // 例如爬到第一坎，很明显从地面到第一坎只有一种可选方式
  // 从地面爬到第二坎，他可以从地面直接跨到第二坎，也可以先从地面到第一坎，再从第一坎到第二坎，也就是2种可选方式
  // 那么求他爬到N楼一共有几种可选方式

  // 1 2 3 5 8 13

  function getFib (n) {
    if (n <= 2) {
      return n
    } else {
      return getFib(n - 1) + getFib(n - 2)
    }
  }

  console.log(getFib(6)) // 13

})();

;(function () {

  function fibonacci (list, n) {
    while (list.length < n) {
      list.push(list[list.length - 1] + list[list.length - 2])
    }
    return list[list.length - 1]
  }

  // 1 2 3 5 8
  console.log(fibonacci([1, 2], 5))
  // 1 3 4 7 11
  console.log(fibonacci([1, 3], 5))

})();