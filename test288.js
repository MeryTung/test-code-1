; (function () {

  // https://github.com/zhaoyiming0803/Promise/blob/dev/src/promise.js

  // 个人理解：
  // Promise 本身没有解决「异步回调地狱」的问题，async await 才解决了。
  // Promise 真正解决的是「信任问题」，把回调函数的执行权放到开发者手中，
  // 比如以下 demo 所示：
  // 就算第三方库 ajax 执行多次（resolve 或 reject），注册的 then 回调也只会执行一次。
  // Promise 本身不会回调过晚，只要决议了，它就会按照规定运行。至于服务器或者网络的问题，并不是 Promise 能解决的，一般这种情况会使用 Promise 的竞态 catch。

  function ajax(options) {
    // ... request

    // ...response
    setTimeout(() => {
      const response = {
        code: 0,
        msg: '请求成功',
        data: {
          a: 1,
          b: 2
        }
      }

      if (response.code === 0) {
        options.success && options.success(response)
        // 多余的回调，Promise then 并不会多次执行
        options.success && options.success(response)
      } else {
        options.fail && options.fail(response)
      }


    })
  }

  function getInfo() {
    return new Promise((resolve, reject) => {
      ajax({
        success: resolve
      })
    })
  }

  function getToken() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          code: 0,
          msg: '请求成功',
          data: {
            token: 123
          }
        })
      })
    })
  }

  function getList() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          code: 0,
          msg: '请求成功',
          data: {
            list: [0, 1, 2, 3, 4, 5]
          }
        })
      })
    })
  }

  getToken().then(res => {
    console.log('token: ', res)

    getInfo().then(res => {
      console.log('info: ', res)

      getList().then(res => {
        console.log('list: ', res)
      })
    }).catch(error => {
      console.log('info error: ', error)
    })
  })

})();