// https://github.com/zhaoyiming0803/test-code/blob/master/test29.js
// https://github.com/zhaoyiming0803/test-code/blob/master/test207-event-loop.js

(function () {
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

  // 优先级顺序：process.nextTick > Promise > setTimeout/setInterval > setImmediate

  // 参考文档：
  // https://www.jianshu.com/p/837b584e1bdd
  // https://www.zhihu.com/question/23028843/answer/34585034
  // https://nodejs.org/en/blog/release/v0.10.0/
  // https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/
})();
