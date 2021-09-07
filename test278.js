;(function () {

  function mockInstanceOf (obj, Fn) {
    if (typeof obj !== 'object') {
      return false
    }
    if (typeof Fn !== 'function') {
      return false
    }
    var prototype = Fn.prototype
    while (obj.__proto__) {
      if (obj.__proto__ === prototype) {
        return true
      }
      obj = obj.__proto__
    }
    return false
  }

  function Person () {}
  var p = new Person()
  var obj = {}
  var str = ''

  console.log(mockInstanceOf(p, Person)) // true
  console.log(mockInstanceOf(obj, Person)) // false
  console.log(mockInstanceOf(str, Person)) // false

})();