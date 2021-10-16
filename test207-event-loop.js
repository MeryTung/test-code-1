// https://github.com/zhaoyiming0803/test-code/blob/master/test29.js
// https://github.com/zhaoyiming0803/test-code/blob/master/test72.js
// https://zhuanlan.zhihu.com/p/371027812

~(function () {
  return

  setTimeout(() => {
    console.log("setTimeout1")
    Promise.resolve().then(() => console.log("promise1"))
  })

  setTimeout(() => {
    console.log("setTimeout2")
    Promise.resolve().then(() => console.log("promise2"))
  })

  // node version v10.20.1
  // setTimeout1 setTimeout2 promise1 promise2

  // node version v12.16.1
  // 与浏览器中的执行效果相同
  // setTimeout1 promise1 setTimeout2 promise2
})();

~(function () {

  // 这个函数其实是独立于 Event Loop 之外的，它有一个自己的队列，当 node event loop 每个阶段完成后，
  // 如果存在 nextTick 队列，就会清空队列中的所有回调函数，并且优先于其他 microtask 执行
  
  return

  process.nextTick(() => {
    console.log("nextTick11")
    Promise.resolve().then(() => console.log("promise11"))
  })

  process.nextTick(() => {
    console.log("nextTick22")
    Promise.resolve().then(() => console.log("promise22"))
  })

  // nextTick 的优先级比 promise 高
  // nextTick11 nextTick22 promise11 promise22
})();

;(function () {

  setTimeout(() => console.log('setTimeout'))

  Promise.resolve().then(() => {
    console.log('Promise')
  })

  process.nextTick(() => {
    console.log('nextTick1')

    process.nextTick(() => {
      console.log('nextTick2')

      process.nextTick(() => {
        console.log('nextTick3')
      })
    })
  })

  // nextTick1 nextTick2 nextTick3 Promise setTimeout

})();
