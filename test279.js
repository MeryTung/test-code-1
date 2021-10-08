;(function () {

  function mockNew (Ctor, ...args) {
    var obj = {}
    obj.__proto__ = Object.create(Ctor.prototype)
    var instance = Ctor.call(obj, ...args)
    // instanceof 运算符用来测试一个对象在其原型链中是否存在一个构造函数的 prototype 属性
    // 参数：object（要检测的对象.）constructor（某个构造函数）
    // 描述：instanceof 运算符用来检测 constructor.prototype 是否存在于参数 object 的原型链上。
    return instance instanceof Object ? instance : obj
  }

  function Person (name, age) {
    this.name = name
    this.age = age
  }

  Person.prototype.print = function print () {
    console.log(this.name, '+', this.age)
  }
  
  var p = mockNew(Person, 'zhaoyiming', 18)

  console.log(p.__proto__) // 上面代码中 instance === undefined，因为 Person 没有返回值
  console.log(p.name)
  console.log(p.age)
  p.print()

})();