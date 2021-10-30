;(function () {

  const Person = (name, age) => {
    this.name = name
    this.age = age
  }

  // Cannot set property 'printInfo' of undefined
  // Person.prototype.printInfo = () => {
  //   console.log(this.name, this.age)
  // }

  // Person is not a constructor
  // const p = new Person('zhangsan', 18)
  // console.log(p)

  Person('zhangsan', 18)

  console.log(global.name) // zhangsan
  console.log(global.age) // 18

})();