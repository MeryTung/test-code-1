// https://github.com/zhaoyiming0803/test-code/blob/master/test29.js
// https://github.com/zhaoyiming0803/test-code/blob/master/test322.js
// https://github.com/zhaoyiming0803/test-code/blob/master/test207-event-loop.js

(function () {
  return

  setTimeout(function () {
    console.log(0);
  });

  setImmediate(function () {
    console.log(1);
  });

  console.log(2);

  Promise.resolve().then(function (res) {
    console.log(3);
  });

  process.nextTick(function () {
    console.log(4);
  });

  // 2 4 3 0 1

  // 优先级顺序（event loop in node）：process.nextTick > Promise > setTimeout/setInterval > setImmediate

  // 参考文档：
  // ***** https://zhuanlan.zhihu.com/p/371027812
  // https://www.jianshu.com/p/837b584e1bdd
  // https://www.zhihu.com/question/23028843/answer/34585034
  // https://nodejs.org/en/blog/release/v0.10.0/
  // https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/
})();

; (function () {

  return

  const fs = require('fs')

  fs.readFile(__filename, () => {
    setTimeout(() => {
      console.log('timeout')
    }, 0)
    setImmediate(() => {
      console.log('immediate')
    })
  })

  // 执行顺序：immediate timeout

})();

; (function () {

  setTimeout(() => {
    console.log('timeout')
  }, 1)
  setImmediate(() => {
    console.log('immediate')
  })

  // 对于以上代码来说，setTimeout 可能执行在前，也可能执行在后。
  // 首先 setTimeout(fn, 0) === setTimeout(fn, 1)，这是由源码决定的，进入事件循环也是需要成本的，如果在准备时候花费了大于 1ms 的时间，那么在 timer 阶段就会直接执行 setTimeout 回调
  // 如果准备时间花费小于 1ms，那么就是 setImmediate 回调先执行了

})();
