;(function () {

  function mockInstanceof (obj, Fn) {
    if (Fn === null || Fn === undefined || typeof Fn !== 'function') {
      return false
    }

    let prototype = Fn.prototype
    // instanceof 运算符用来测试一个对象在其原型链中是否存在一个构造函数的 prototype 属性
    // 参数：object（要检测的对象）instanceof constructor（某个构造函数）
    // 描述：instanceof 运算符用来检测 constructor.prototype 是否存在于参数 object 的原型链上。
    while (obj.__proto__) {
      if (obj.__proto__ === prototype) {
        return true
      }
      obj = obj.__proto__
    }
    
    return false
  }

  function Person () {}
  const p = new Person()
  const obj = {}
  const str = ''

  console.log(mockInstanceof(p, Person)) // true
  console.log(mockInstanceof(obj, Person)) // false
  console.log(mockInstanceof(str, Person)) // false
  console.log(mockInstanceof(Person, Object)) // true

})();