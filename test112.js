;(function () {
  // http://es6.ruanyifeng.com/#docs/generator
  var gen = function * () {
    var a = yield 1;
    var b = yield 2;
  }

  const res = gen();
  console.log(res.next());
  console.log(res.next());

  

})();