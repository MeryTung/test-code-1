// tree 数据路径中的 value 之和
const tree = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null
    },
    right: {
      val: 5,
      left: null,
      right: null
    }
  },
  right: {
    val: 3,
    left: null,
    right: null
  }
}

; (function () {

  function sum (tree) {
    let arr = []

    function next (tree) {
      if (!tree) {
        return
      }
      arr.push(tree.val)
      next(tree.left)
      next(tree.right)
    }

    next(tree)

    return arr.reduce((a, b) => a + b, 0)
  }

  console.log(sum(tree))

})();

;(function () {

  function sum (tree) {
    const arr = []

    function next (tree, val = '') {
      const _val = val + tree.val
      if (tree.left) {
        next(tree.left, _val)
      }
      if (tree.right) {
        next(tree.right, _val)
      }
      // 停止递归的条件【一定是】left 和 right 都为 null
      if (!tree.left && !tree.right) {
        arr.push(_val)
      }
    }

    next(tree)

    return arr.reduce((a, b) => +a + +b, 0)
  }

  console.log(sum(tree))

})();