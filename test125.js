(function () {
  // https://github.com/zhaoyiming0803/test-code/blob/master/test35.js
  function compose() {
    var args = [].slice.call(arguments);
    // return function (arg) {
    //   return args[2](args[1](args[0](arg)));
    // }
    return function (arg) {
      return args.reduce((arg, next) => {
        return next(arg);
      }, arg);
    };
  }

  Array.prototype._reduceRight = function (cb, base) {
    const len = this.length;

    if (!len) {
      return this;
    }

    let i = len - 1;
    let res = base || this[i];

    while (i > 0) {
      res = cb(res, this[--i]);
    }

    return res;
  };

  function composeRight() {
    var args = [].slice.call(arguments);
    return function (arg) {
      return args._reduceRight((arg, next) => {
        return next(arg);
      }, arg);
    };
  }

  function reverse(str) {
    return str.split("").reverse().join("");
  }

  function toUpperCase(str) {
    return str.toUpperCase();
  }

  function toLowerCase(str) {
    return str.toLowerCase();
  }

  console.log(compose(toUpperCase, reverse, toLowerCase)("hello world"));
  console.log(composeRight(toUpperCase, reverse, toLowerCase)("hello world"));

  console.log([1, 2, 3]._reduceRight((a, b) => a * b));
  console.log([1, 2, 3].reduceRight((a, b) => a * b));
})();
