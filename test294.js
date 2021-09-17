;(function () {

  console.log('a: ', a) // [Function: a]
  console.log('b: ', b) // undefined

  var a = 'a'
  var b = 'b'
  function a () {}

  console.log('a: ', a) // a
  console.log('b: ', b) // b


})();

(function () {

  return

  function a () {}
  // 关于变量提升：
  // 如果 a 没有被赋值，就不会覆盖函数声明的值
  // 把 function a 和 var a 的顺序调换一样，结果是一样的
  var a
  

  console.log('a: ', a) // [Function: a]

})();