;(function () {

  Function.prototype._apply = function () {
    var context = arguments[0];
    context.fn = this;

    var args = arguments[1];
    // var res = eval('context.fn('+ args.join(',') +')');
    var res = context.fn(...args)

    delete context.fn;
    return res;
  }

  var arr = [1, 2, 3, 4, 5];
  arr.push._apply(arr, [6, 7, 8]);

  console.log(arr);
})();