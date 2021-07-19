;(function () {

  // 在代码块内，使用let、const命令声明变量之前，该变量都是不可用的。
  // 这在语法上，称为"暂时性死区"（temporal dead zone，简称 TDZ）。

  var val = 10

  if (true) {
    val = 20
    console.log(val) // ReferenceError: val is not defined
    let val
  }

})();