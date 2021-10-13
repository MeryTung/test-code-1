;(function () {

  // 1 3 2

  setTimeout(() => {
    console.log(2)
  })

  console.log(1)

  Promise.resolve().then(() => {
    console.log(3)
  })

})();