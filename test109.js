(function () {
  // https://github.com/zymfe/test-code/blob/master/test180.js
  // 为什么 [] == ![]
  // https://segmentfault.com/a/1190000008594792
  // 关于相等操作符，可参考《JavaScript高级程序设计》第51页


  // 1、如果有一个操作数是布尔值，则在比较相等性之前先将其转换为数值----false转换为0，而true转换为1。

  // 2、如果一个操作数是字符串，另一个操作数是数值，在比较相等性之前先将字符串转换为数值。

  // 3、如果一个操作数是对象，另一个操作数不是，则调用对象的valueOf()方法，如果得到的值不是基本类型值，则基于返回值再调用toString方法（这个过程即ToPrimitive），用得到的基本类型值按照前面的规则进行比较。

  // 4、如果两个操作数都是对象，则比较他们是不是同一个对象。如果两个操作数指向同一个对象，则相等操作符返回true, 否则返回false。
  
  var a = [];
  var b = ![];
  console.log(a == b); // true
  console.log(a == 0); // true
  console.log(b == false); // true
  console.log(a == false); // true
  console.log([] == []); // false
})();

(function () {
  var a = 1;
  var b = {};
  console.log(a + b); // 1[object Object]

  var c = 1;
  var d = {
    // 重写 valueOf 方法
    valueOf: function () {
      return 1;
    },
  };
  console.log("c+d=" + (c + d)); // 2

  var e = 1;
  var f = {
    // 重写 toString 方法
    toString: function () {
      return 2;
    },
  };
  console.log("e+f=" + (e + f)); // 3
})();

(function () {
  var a = 1;
  var b = {};
  console.log(a + b); // 1[object Object]
})();

(function () {
  var a = 1;
  var b = [];
  console.log(a + b); // "1"

  var c = 1;
  var d = [1];
  console.log(c + d); // "11"

  var e = 1;
  var f = [1, 2, 3];
  console.log(e + f); // "11,2, 3"

  var g = 1;
  var h = [1, 2, 3];
  console.log(h + g); // "1, 2, 31"
})();
