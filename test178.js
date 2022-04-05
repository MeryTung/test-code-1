(function () {
  // 实例的原型指针指向构造函数的原型对象
  // 鸡生蛋？蛋生鸡？
  function A() {}
  var a = new A();
  console.log(a.__proto__ === A.prototype); // true
  console.log(a.__proto__.__proto__ === Object.prototype); // true
  console.log(a.__proto__.__proto__.__proto__); // null
  console.log(typeof Object) // function
})();
