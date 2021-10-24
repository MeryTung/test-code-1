;(function () {

  console.log('script start')

  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('promise1')
      resolve()
    })
  })
  .then(() => {
    console.log('then1 - 1')
    new Promise((resolve, reject) => {
      console.log('promise2')
      resolve()
    })
    .then(() => {
      console.log('then2 - 1')
    })
    .then(() => {
      console.log('then2 - 2')
    })
    .then(() => {
      console.log('then2 - 3')
    })
    return 'then1 then1 then1'
  })
  .then((res) => {
    console.log('then1 - 2', res)
  })

  console.log('script end')

})();