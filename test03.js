; (function () {
  // 单例模式
  function Person(name) {
    this.name = name
  }

  Person.prototype.showName = function showName() {
    return this.name
  }

  var ProxyPerson = (function () {
    var instance = null

    return function person(name) {
      if (instance === null) {
        instance = new Person(name)
      }
      return instance
    }
  })();

  var p1 = new ProxyPerson('zhangsan')
  var p2 = new ProxyPerson('lisi')

  console.log(p1.showName())
  console.log(p2.showName())

})();

; (function () {

  class Person {
    constructor(name) {
      if (!Person.instance) {
        this.name = name
        Person.instance = this
      }
      return Person.instance
    }

    showName() {
      return this.name
    }
  }

  var p1 = new Person('zhangsan')
  var p2 = new Person('lisi')

  console.log(p1.showName())
  console.log(p2.showName())
})();

; (function () {
  class Person {
    constructor(name) {
      this.name = name
    }

    static getInstance(name) {
      if (!this.instance) {
        this.instance = new Person(name)
      }
      return this.instance
    }

    showName() {
      return this.name
    }
  }

  var p2 = Person.getInstance('lisi')
  var p1 = Person.getInstance('zhangsan')

  console.log(p1.showName())
  console.log(p2.showName())
  console.log(Person.instance)

})();