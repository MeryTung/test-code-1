;(function () {

  Promise.retry = function retry (fn, limit = 5) {
    let num = 1
    return new Promise((resolve, reject) => {
      function run () {
        fn().then((res) => {
          resolve(res)
        }).catch(error => {
          if (num++ < limit) {
            run()
          } else {
            reject(error)
          }
        })
      }
      run()
    })
  }

  let i = 1
  // 设置不同的 limit 可以看到效果
  let limit = 10

  function test () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (i === limit) {
          resolve('success')
        } else {
          reject('error ' + i++)
        }
      })
    })
  }

  Promise.retry(test)
    .then(res => {
      console.log('res: ', res)
    })
    .catch(error => {
      console.log('error: ', error)
    })

})();