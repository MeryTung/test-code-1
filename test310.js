// 给定一个非负整数 num，反复将各个位上的数字相加，直到结果为一位数

; (function () {

  function sum(num) {
    const res = num.toString().split('').reduce((a, b) => {
      return +a + +b
    }, 0)
    if (res < 10) {
      return res
    } else {
      return sum(res)
    }
  }

  console.time('sum1')
  console.log(sum(8888))
  console.timeEnd('sum1')

})();

; (function () {

  function sum (num) {
    let remainder = 0 // 余数
    while (num > 10) {
      remainder = num % 10 + remainder
      num = Math.floor(num / 10)
      if (num < 10) {
        num += remainder
        remainder = 0
      }
    }
    return num
  }

  console.time('sum2')
  console.log(sum(8888))
  console.timeEnd('sum2')

})();