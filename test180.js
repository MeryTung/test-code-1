(function () {
  //github.com/zhaoyiming0803/test-code/blob/master/test109.js
  // https://segmentfault.com/a/1190000008594792
  // 关于相等操作符，可参考《JavaScript高级程序设计》第51页
  var obj = {
    a: 1,
  };
  console.log(obj.valueOf() === obj); // true

  var str = "hello";
  console.log(str.valueOf() === str); // true

  var num = 123;
  console.log(num.valueOf() === num); // true

  var bool = true;
  console.log(bool.valueOf() === true); // true
  console.log(bool + 1); // 2
  console.log(bool.toString()); // "true"

  var arr = [1, 2];
  console.log(arr.valueOf() === arr); // true
})();

(function () {
  // 操作符连接『对象』：
  // 先调用 valueOf 方法（如果有），再调用 toString() 方法（如果有）
  // 如果其原型上没有 valueOf 方法，那也不会再去调用原型链上的 valueOf 方法，会直接去调用其原型上的 toString 方法
  // 如果其原型上没有 toString 方法，那也不会再去调用原型链上的 toString 方法，而是直接返回 valueOf 后的值

  function Num(value) {
    this.value = value;
  }

  Num.prototype.valueOf = function () {
    return this;
  };

  var num1 = new Num(1);
  console.log(num1 + 1); // [object Object]1

  Num.prototype.toString = function () {
    return 200;
  };

  var num2 = new Num(2);
  console.log(num2 + 2); // 202
})();

(function () {
  Boolean.prototype.valueOf = function () {
    return 100;
  };

  Boolean.prototype.toString = function () {
    return 200;
  };

  // 对于 boolean 来说，执行以下操作与 valueOf 和 toString 无关
  var a = true;
  var b = 1;
  console.log(a + b); // 2
  var c = "1";
  console.log(a + c); // true1
})();
