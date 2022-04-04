const arr = [1, 2, 3, 4]

arr.forEach(function (item, i) {
  setTimeout(function (){
    console.log('forEach: ', i)
  })
})


for (var i = 0; i < arr.length; i++) {
  setTimeout(function () {
    console.log('for + var + setTimeout: ', i)
  })
}