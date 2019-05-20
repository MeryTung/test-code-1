;(function () {

  Function.prototype._call = function () {
    var context = arguments[0];
    context.fn = this;

    var args = [];
    for (var i = 1; i < arguments.length; i += 1) {
      args.push(arguments[i]);
    }

    var res = eval('context.fn(' + args.join(',') + ')');

    delete context.fn;
    return res;
  }

  function fn (c, d) {
    this.c = c;
    this.d = d;
    return this.a + this.b + this.c + this.d;
  }

  var obj = {
    a: 100,
    b: 200
  };

  console.log(fn._call(obj, 1, 2));

})();