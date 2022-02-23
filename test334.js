; (function () {


  class Person1 {
    getName() {
      return 1
    }
    getAge() {
      return 2
    }
  }

  console.log('Person1 getOwnPropertyDescriptors: ', Object.getOwnPropertyDescriptors(Person1.prototype))
  console.log('Person1.prototype: ', Person1.prototype)

  // class 的 prototype 不可枚举
  for (let prop in Person1.prototype) {
    console.log(`prop - Person1: `, prop)
  }


  console.log('------------------------------------')



  function Person2() { }

  Person2.prototype.getName = function getName() {
    return 11
  }

  Person2.prototype.getAge = function getName() {
    return 22
  }

  console.log('Person2.getOwnPropertyDescriptors: ', Object.getOwnPropertyDescriptors(Person2.prototype))
  console.log('Person2.prototype: ', Person1.prototype)

  // 原型链声明的方法可以枚举
  for (let prop in Person2.prototype) {
    console.log(`prop - Person1: `, prop)
  }

})();