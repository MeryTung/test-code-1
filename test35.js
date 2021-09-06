(function () {
  // https://github.com/zhaoyiming0803/test-code/blob/master/tes125.js
  var arr = [1, 2, 3, 4];

  // Array.prototype._reduce = function (cb, base) {
  // 	var index = 0;
  // 	var res = base !== undefined
  // 		? base
  // 		: this[index++];
  // 	var lastIndex = this.length - 1;
  // 	while (index <= lastIndex) {
  // 		res = cb(res, this[index++]);
  // 	}
  // 	return res;
  // }

  // Array.prototype._reduce = function (cb, base) {
  //   var index = 0;
  //   var res = base !== undefined ? base : this[index++];
  //   for (; index < this.length; index++) {
  //     res = cb(res, this[index]);
  //   }
  //   return res;
  // };

  // [1, 2, 3].reduce(() => {})
  Array.prototype._reduce = function (cb, base) {
    var len = this.length
    if (!len) {
      return this
    }
    var index = 0
    var res = base !== undefined ? base : this[index++]
    while (index < len) {
      res = cb(res, this[index++])
    }
    return res
  }

  var sum = arr._reduce(function (a, b) {
    return a + b;
  }, 0);
  console.log(sum); // 10

  var product = arr._reduce(function (a, b) {
    return a * b;
  }, 1);
  console.log(product); // 24

  console.log([1]._reduce((a, b) => a + b)); // 1
})();
