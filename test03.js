;(function () {
    // 单例模式
    function Person (name) {
      this.name = name
    }
  
    Person.prototype.showName = function showName () {
      return this.name
    }
  
    var ProxyPerson = (function () {
      var instance = null
  
      return function person (name) {
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