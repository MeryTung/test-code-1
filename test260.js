;(function () {

  var map = {
    curry: function (a) {
      return function (b) {
        return a++ + b
      }
    }
  }

  var getInfo = function (name) {
    return map[name]
  }

  var fn = getInfo('curry')

  var inner = fn(100)

  console.log(inner(200)) // 300
  console.log(inner(200)) // 301
  console.log(fn(100)(200)) // 300
  console.log(getInfo('curry')(100)(200)) // 300

})();