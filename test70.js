//github.com/zhaoyiming0803/test-code/blob/master/test210.js
// 使用 Function 构造器生成的函数，并不会在创建它们的上下文中创建闭包；它们一般在全局作用域中被创建。
// 当运行这些函数的时候，它们只能访问自己的本地变量和全局变量，不能访问 Function 构造器被调用生成的上下文的作用域。
// 这和使用带有函数表达式代码的 eval 不同

(function () {
  return;

  var n = 1;

  function fn() {
    var n = 2;
    // return new Function('a', 'b', 'return a + b');
    return new Function("a", "b", "return a + b + n;"); // n is not defined
  }

  console.log(fn()(1, 2));
})();

(function () {
  return
  var str = "var a = 1; var b = 2; return a + b + this.c;";

  var obj = {
    c: 100,
  };

  var fn = new Function(str).bind(obj);

  console.log(fn()); // 103

  eval("var a = 1; var b = 2; console.log(a+b)"); // 3
})();

(function () {
  return
  var str =
    "var r = []; for (var i = 0; i < data.length; i++) {r.push(data[i])} return r;";

  var data = [
    {
      id: 1,
      name: "zhangsan",
    },
    {
      id: 2,
      name: "lisi",
    },
    {
      id: 3,
      name: "wangwu",
    },
  ];
  var fn = new Function("data", str);
  var res = fn(data);
  console.log(res);
  console.log(Object.prototype.toString.call(res));
})();

(function () {
  // https://github.com/zhaoyiming0803/ztpl

  var str = "var r = [];";
  str += "for (var i = 0; i < 3; i++) { ";
  str += 'r.push("<div>索引：");';
  str += "r.push(i);";
  str += 'r.push("</div>");';
  str += "};";
  str += 'r.push("<p>hello template engine</p>");';
  str += 'return r.join("")';

  var fn = new Function(str);
  console.log(fn());
})();
