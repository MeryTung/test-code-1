;(function () {

  function mockNew (Ctor, ...args) {
    var obj = {}
    obj.__proto__ = Object.create(Ctor.prototype)
    var instance = Ctor.call(obj, ...args)
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