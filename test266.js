;(function () {

  const arr = ['a', 'b', 'c']

  for (const item of arr.entries()) {
    console.log('item: ', item) // [0, 'a'] [2, 'b'] // ...
  }

})();