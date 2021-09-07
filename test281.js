; (function () {

  // function sum(a) {
  //   return function (b) {
  //     return function (c) {
  //       return a + b + c
  //     }
  //   }
  // }

  // 使用闭包把所有的参数先保存起来，然后利用 reduce 实现累增
  function add () {
    const _args = []
    return function sum () {
      if (arguments.length === 0) {
        return _args.reduce(function (a, b) {
          return a + b
        })
      }
      [].push.apply(_args, [].slice.call(arguments))
      // return sum
      return arguments.callee
    }
  }

  const sum = add()
  console.log(sum(1)(2)(3)())

})();