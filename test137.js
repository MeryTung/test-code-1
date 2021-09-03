(function () {
  return;
  function p() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(1);
      }, 1000);
    });
  }

  function* run() {
    var res = yield p();
  }

  var gen = run();
  gen.next().value.then((val) => {
    console.log(val);
  });
  console.log(gen.next());
})();

(function () {
  return;
  function* run() {
    var a = yield 100;
    console.log("inline a: ", a);
  }

  var gen = run();
  var a = gen.next(1).value;
  console.log("a: ", a);
  var b = gen.next(2).value;
  console.log("b: ", b);
})();

(function () {
  return;

  // 第一个next()仅仅是用于启动生成器用的，并不会传入任何东西，如果传入了参数也会被自动忽略掉。
  // yield ...在值传递方面的作用相当于return ...，你也可以把它当做一个return语句来看待，如果yield后面不加参数，则默认yield undefined;
  // 最后一个next()执行完毕之后，得到的值是*run()函数return出来的值，如果函数没有自己加return语句，一样也会默认return undefined;
  // next()执行完毕后会返回一个对象，属性值有两个，分别为value(从yield或return处拿到的值)和done(boolean值，标识生成器是否执行完毕)。

  function* run() {
    var x = yield "starting";
    var y = yield x * 2;
    console.log("inline: ", x, y);
    return x + y;
  }

  var gen = run();

  var res = gen.next(); // 第一个 next() 用于启动生成器
  console.log(res.value); // 输出 "starting"（yield语句后跟的值传给了next()的对象）

  res = gen.next(5); // 向等待的 [第一个yield] 传入值5，*run()中的 x 被赋值为5
  console.log(res.value); // 输出10 （x * 2得到了10传给 next(5) 运行后的对象）

  res = gen.next(20); // 向等待的 [第二个yield] 传入值20， *run()中的y被赋值为20
  // 输出 inline: 5 20    （执行后面的console.log(x, y)语句分别输出x,y的值）
  console.log(res.value); // 输出 25  (return ...的值传给了next(20)运行后的对象)
})();

(function () {
  // 异常传值的情况

  return

  function* run() {
    var x = yield "starting";
    var y = yield x * 2;
    console.log(x, y);
    // return 123
  }

  var gen = run();

  var res = gen.next("1111"); // '1111'被丢弃
  console.log(res.value); // 输出"starting"

  res = gen.next(); // ------- 不给yield传值 x成了undefined ---------
  console.log(res.value); // 输出NaN （undefined * 2得到了NaN传给next()运行后的对象）

  res = gen.next(); // 不给yield传值 y未拿到值
  // 输出undefined undefined
  console.log(res.value); // 输出undefined  (默认return undefined;)
})();

(function () {
  // 实例化之后，run() 里的代码不会主动执行
  // 第一个 next() 永远是用于启动生成器
  // 生成器启动后要想运行到最后，其内部的每个 yield 都会对应一个 next()
  // 所以说 next() 永远都会比 yield 多一个

  // 当生成器处于暂停状态时，暂停的 yield 表达式处可以接收下一个启动它的next(...)传进来的值。
  // 当 next(...) 使生成器继续往下执行时，其传入的值会将原来的 yield 语句替换掉。

  return;

  function* run() {
    var a = yield 100;
    var b = yield 200;
    var c = yield 300;
    console.log("inline a: ", a); // 2
    console.log("inline b: ", b); // 3
    console.log("inline c: ", c); // 4
  }

  var gen = run();
  console.log(gen.next(1).value); // 100
  console.log(gen.next(2).value); // 200
  console.log(gen.next(3).value); // 300
  console.log(gen.next(4).value); // undefined

  // 100 -> 200 -> 300 -> inline a: 2 -> inline b: 3 -> inline c: 4 -> undefined
})();

(function () {
  return;

  function* run() {
    var a = yield 100;
    var b = yield 200;
    var c = yield 300;
    console.log("inline a: ", a); // 100
    console.log("inline b: ", b); // 200
    console.log("inline c: ", c); // 300
  }

  function co(gen) {
    var g = gen();
    next();
    function next(value) {
      var res = g.next(value);
      if (res && !res.done) {
        next(res.value);
      }
    }
  }

  co(run);
})();

;(function () {

  function* run () {
    var a = yield 'a'
    var b = yield 2
    var c = yield 3 * b
    console.log({
      a,
      b,
      c
    }) // { a: 456, b: 789, c: 1 }
    return a + b + c
  }

  var gen = run()

  // 第一个 next 用于启动 gen 函数，传入的参数会被忽略
  // 从第二个 next 开始，先把 next 的参数作为结果赋给上一个 yield 的结果，然后再执行当前 yield 表达式
  // 手动 next 太繁琐，而且容易出错，co 函数正好解决这个问题
  console.log(gen.next(123).value) // a
  console.log(gen.next(456).value) // 2 ， a 变成了 456，执行 yield 后面的表达式输出 2
  console.log(gen.next(789).value) // 2367 = 789 * 3 ， b 变成了 789，执行 yield 后面的表达式，输出 2367
  console.log(gen.next(1).value) // 1246 = 456 + 789 + 1，c 变成了 1，执行 return 语句
  console.log(gen.next().done) // true

  console.log('----------------------------------')

  function co (fn) {
    var gen = fn()
    
    return next()

    function next (value) {
      var res = gen.next(value)
      if (!res) {
        return
      }
      if (!res.done) {
        return next(res.value)
      }
      return res.value
    }
  }

  console.log(co(run)) // a26
  // { a: 'a', b: 2, c: 6 }
})();

;(function () {

  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')

  function* run () {
    var a = yield 1
    var b = yield 2
    var c = 3
    var d = 4
    console.log(a, b, c, d)
  }

  var gen = run()
  console.log(gen.next().value)
  console.log(gen.next(100).value)
  // 没有以下 next，run 函数第二个 yield 后面的代码都不执行
  // console.log(gen.next(200).value)

})();