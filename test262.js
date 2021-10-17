; (function () {

  return

  // https://www.cnblogs.com/zyl-Tara/p/10416886.html

  // async定义的是一个Promise函数和普通函数一样只要不调用就不会进入事件队列。
  // async内部如果没有主动return Promise，那么async会把函数的返回值用Promise包装。
  // await关键字必须出现在async函数中，await后面不是必须要跟一个异步操作，也可以是一个普通表达式。

  // 遇到await关键字，await右边的语句会被立即执行然后await下面的代码进入等待状态，等待await得到结果。
  // 当await的后面不是promise对象，那么await会阻塞其后面的代码，先执行async外部的同步代码，
  // 同步代码执行完再回到async内部，把这个非promise的东西，作为 await 表达式的结果。
  // 当await后面如果是 promise 对象，await 也会暂停async后面的代码，先执行async外面的同步代码，
  // 等着 Promise 对象 fulfilled，然后把 resolve 的参数作为 await 表达式的运算结果。

  async function async1() {
    console.log('async1 start')
    await async2()
    console.log('async1 end')
  }

  async function async2() {
    console.log('async2')
  }

  console.log('script start')

  setTimeout(function () {
    console.log('setTimeout')
  }, 0)

  async1();

  new Promise(function (resolve) {
    console.log('promise1')
    resolve()
  }).then(function () {
    console.log('promise2')
  });
  console.log('script end')

  /*输出结果：
    script start
    async1 start
    async2
    promise1
    script end

    // 在浏览器中是先执行 async1 end，再执行 promise2
    // 在 windows node v10 中是先执行 promise2，再执行 async1 end，更高版本的 node 中待验证
    async1 end
    promise2
    
    setTimeout
  */

})();

;(function () {

  async function async1 () {
    await async2()
    console.log('async1 end')
  }

  async function async2 () {
    console.log('async2')
    return new Promise((resolve) => {
      console.log('promise')
      // resolve()
    })
    // return Promise.resolve('promise')
  }

  async1()

  console.log('script end')

  // async2 
  // promise 
  // script end

  // 以上 await 后面是 promise 对象，await 暂停了 async 后面的代码（async1 end），先执行 async 外面的同步代码，
  // 等着 Promise 对象 fulfilled，然后把 resolve 的参数作为 await 表达式的运算结果。
  // 但是以上 promise 并没有 resolve，所以最后 async1 end 没有执行
  // 如果将 new Promise 的代码换成 Promise.resolve 或加上 resolve 的代码，async1 end 就会被打印

})();