(function () {
  // *****
  // 每创建一个函数，就会同时创建它的 prototype 原型对象
  // *****

  // 本质上，构造函数和普通函数除了调用方式不同之外，没有区别
  // 只是为了区分两者之间的作用和关系，通常构造函数名称首字母都是大写
  function fn() {}
  function Fn() {}

  console.log(fn.prototype.constructor) // [Function: fn]
  console.log(Fn.prototype.constructor) // [Function: Fn]
})();

(function () {
  // JavaScript高级程序设计 - 156页
  function Person() {}

  var person = new Person()
  Person.prototype = {
    name: 'zhangsan',
    age: 18
  }

  console.log(person.name) // undefined
})();

(function () {
  // JavaScript高级程序设计 - 156页
  function Person() {}

  var person = new Person()

  Person.prototype.name = 'lisi'

  console.log('---', person.name) // lisi
})();

(function () {
  function Person() {}

  Person.prototype = {
    name: 'zhangsan',
    age: 18,
  }

  var person = new Person()

  console.log(person.name) // zhangsan
  console.log(person.constructor === Object) // true
  console.log(person.constructor === Person) // false
  console.log(person instanceof Person) // true
})();

(function () {
  function Person() {}

  Person.prototype = {
    // 因为 constructor 属性本身不可枚举，所以使用下面的数据属性手动设置 enumerable 和 value
    // constructor: Person
    name: 'zhangsan',
    age: 18,
  }

  // 数据属性
  Object.defineProperty(Person.prototype, 'constructor', {
    enumerable: false,
    value: Person,
  })

  var person = new Person()

  console.log(person.name) // zhangsan
  console.log(person.constructor === Person) // true
  console.log(person instanceof Person) // true
})();
