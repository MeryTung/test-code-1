;(function () {

  function mockInstanceof (obj, Fn) {
    if (typeof obj !== 'object') {
      return false
    }
    if (Fn === null || Fn === undefined || typeof Fn !== 'function') {
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

  console.log(mockInstanceof(p, Person)) // true
  console.log(mockInstanceof(obj, Person)) // false
  console.log(mockInstanceof(str, Person)) // false

})();