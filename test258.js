;(function () {

  var str = 'asdfasfgh'

  function findFirstUniqueItem (str) {
    for (var i = 0; i < str.length; i++) {
      const item = str[i]
      if (str.indexOf(item) === str.lastIndexOf(item)) {
        return item
      }
    }
  }

  console.log(findFirstUniqueItem(str))

})();