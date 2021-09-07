;(function () {

  var obj = {
    a: 1
  }

  var p = Promise.resolve(obj)
  var res1
  var res2
  var res3
  var res4
  p.then(res => {
    res1 = res
    return res
  }).then(res => {
    res2 = res
    return Promise.resolve(res)
  }).then(res => {
    res3 = res
    return 123
  }).then(res => {
    res4 = res
  })
  
  setTimeout(() => {
    console.log('res1: ', res1) // { a: 1 }
    console.log('res2: ', res2) // { a: 1 }
    console.log('res3: ', res3) // { a: 1 }
    console.log('res4: ', res4) // 123
    console.log('res1 === res2: ', res1 === res2) // true
    console.log('res1 === res3: ', res1 === res3) // true
  })


  // then = function (onFullFilled, onRejected) {
  //   return new Promise((onFullFilledNext, onRejectedNext) => {
  //     const fullfilled = (value) => {
  //       res = onFullFilled(value)
  //       if (res is Promise) {
  //         res.then(onFullFilledNext, onRejectedNext)
  //       } else {
  //         onFullFilled(res)
  //       }
  //     }

  //     status 0 
  //       resolves.push(fullfilled)
  //   })
  // }

})();