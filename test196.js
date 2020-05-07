(function () {
  /**
   * 寄生组合继承
   * 相比组合继承，父类构造函数只调用了一次
   */

  Object._create = function (obj) {
    // function Obj() {}
    // Obj.prototype = obj;
    // Obj.prototype.constructor = Obj;
    // return new Obj();
    const _obj = {};
    _obj.__proto__ = obj;
    return _obj;
  };

  function inhitance(Sub, Super) {
    // const prototype = Object._create(Super.prototype);
    // prototype.constructor = Sub;
    // Sub.prototype = prototype;

    function Inner() {}
    Inner.prototype = Super.prototype;
    Inner.consructor = Inner;
    Sub.prototype = new Inner();
  }

  function SuperType(name) {
    this.name = name;
  }

  SuperType.prototype.getName = function getName() {
    return this.name;
  };

  function SubType(name, age) {
    SuperType.call(this, name);
    this.age = age;
  }

  inhitance(SubType, SuperType);

  const a = new SubType("zhangsan", 18);
  console.log(a.getName()); // zhangsan

  SubType.prototype.getAge = function getAge() {
    return this.age;
  };

  console.log(a.getAge()); // 18
  // console.log(SuperType.prototype.getAge); // [Function: getAge] 不使用Inner
  console.log(SuperType.prototype.getAge); // undefined 使用Inner
})();
