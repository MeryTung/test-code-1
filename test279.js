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

  console.log(p.name)
  console.log(p.age)
  p.print()

})();