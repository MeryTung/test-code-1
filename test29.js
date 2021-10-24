// https://github.com/zhaoyiming0803/test-code/blob/master/test207-event-loop.js
// https://github.com/zhaoyiming0803/test-code/blob/master/test72.js
// https://github.com/zhaoyiming0803/test-code/blob/master/test322.js

(function () {
  console.log("script start");

  setTimeout(function () {
    console.log("setTimeout");
  }, 0);

  Promise.resolve()
    .then(function () {
      console.log("promise1");
    })
    .then(function () {
      console.log("promise2");

      Promise.resolve()
        .then(function () {
          console.log("promise3");
        })
        .then(function () {
          console.log("promise4");
        });
    });

  console.log("script end");

  Promise.resolve()
    .then(function () {
      console.log("promise5");
    })
    .then(function () {
      console.log("promise6");
    });

  var p = Promise.resolve();
  p.then(function () {
    console.log("promise7");
  });
  p.then(function () {
    console.log("promise8");
  });

  /**
   * node version v12.16.1
   *  script start
      script end
      promise1
      promise5
      promise7
      promise8
      promise2
      promise6
      promise3
      promise4
      setTimeout
   */

  /*
   * Microtask 通常来说就是需要在当前 task 执行结束后立即执行的任务，例如需要对一系列的任务做出回应，或者是需要异步的执行任务而又不需要分配一个新的 task，这样便可以减小一点性能的开销。
   * microtask 任务队列是一个与 task 任务队列相互独立的队列，microtask 任务将会在每一个 task 任务执行结束之后执行。
   * 每一个 task 中产生的 microtask 都将会添加到 microtask 队列中，microtask 中产生的 microtask 将会添加至当前队列的尾部，并且 microtask 会按序的处理完队列中的所有任务。
   * microtask 类型的任务目前包括了 MutationObserver 以及 Promise 的回调函数。
   *
   * 事件队列严格按照时间先后顺序将任务压入执行栈执行，所以浏览器能够使得 JavaScript 内部任务与 DOM 任务有序的执行。
   * ------ 当一个 task 执行结束后，在下一个 task 执行开始前，浏览器可以对页面进行重新渲染。-------
   * 当执行栈为空时，浏览器会一直不停的检查事件队列，如果不为空，则取出第一个任务；
   *
   * http://www.cnblogs.com/dong-xu/p/7000163.html
   * http://www.cnblogs.com/dong-xu/p/7000139.html
   * https://github.com/zhaoyiming0803/Promise
   */

  // 每当一个 Promise 被决议（或是被拒绝），便会将其回调函数添加至 microtask 任务队列中作为一个新的 microtask 。
  // 这也保证了 Promise 可以异步的执行。
  // 所以当我们调用 .then(resolve, reject) 的时候，会立即生成一个新的 microtask 添加至队列中，
  // 这就是为什么上面的 'promise1' 和 'promise2' 会输出在 'script end' 之后，因为 microtask 任务队列中的任务必须等待当前 task 执行结束后再执行，
  // 而 'promise1' 和 'promise2' 输出在 'setTimeout' 之前，这是因为 'setTimeout' 是一个新的 task，
  // ------ 而 microtask 执行在当前 task 结束之后，下一个 task 开始之前。------
  // Vue 异步刷新视图正好利用了一个特性，一个 task 执行完毕，下一个 task 开始前会执行页面渲染，同时下一个 task 开始前也会执行所有的微任务，得到最终的值。
})();
