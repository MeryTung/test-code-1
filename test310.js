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

  function sum(num) {
    if (num < 10) {
      return num
    }
    let b = 0
    let c = 0
    while (num >= 10) {
      b = num % 10
      c += b
      num = Math.floor(num / 10)
      if (num < 10) {
        num += c
        c = 0
      }
    }
    return num
  }

  console.time('sum2')
  console.log(sum(8888))
  console.timeEnd('sum2')

})();