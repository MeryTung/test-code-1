(function () {
  // JavaScript 高级程序设计，第66页：
  // num1 和 arguments[1] 不是相同的内存空间，它们的内存空间是独立的，但它们的值会同步。
  // 但是在严格模式下对 arguments 对象做了一些限制，如果 num1 === undefined，下面 arguments[1] = 200 的赋值会变得无效。
  function fn(num0, num1) {
    arguments[1] = 200;
    console.log(num0, num1, arguments);
  }
  fn(1, 2); // 1, 200, [Arguments] { '0': 1, '1': 200 }
  fn(1); // 1, undefined, [Arguments] { '0': 1, '1': 200 }

  function fn1 (num0, num1) {
    num1 = 300
    console.log(num0, num1, arguments)
  }
  fn1(1, 2) // 1 300 [Arguments] { '0': 1, '1': 300 }
  fn1(1) // 1 300 [Arguments] { '0': 1 }
})();

(function () {
  // 函数参数传递的是都是值，不可能通过引用传递参数 - JavaScript 高级程序设计，第66页，表述的有点绕
  // 都是对于"地址引用值"的一个传递。
  // 操作也是"借由地址值"来进行操作的。
  function setName(obj) {
    // 对 obj 进行操作会表现在person上
    obj.name = "XX";
    // 这里 obj 的引用改变了，如果传递的是引用，那么 person 的地址也会改变，
    // 也就是说，接下来对 obj 的操作，也会表现在person上
    obj = new Object();
    obj.name = "YY";
  }
  const person = new Object();
  setName(person);
  console.log(person.name); // XX，说明不是引用传递
})();

(function () {
  // JavaScript 高级程序设计，第66页：重写 arguments 的值会导致语法错误，代码不会执行
  // 看起来不会导致语法错误......
  function fn() {
    arguments = 123;
    console.log(arguments); // 123
  }
  fn(1, 2);
})();
