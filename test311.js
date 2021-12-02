// 求字符的最短距离
// 给定一个字符串 S 和一个字符 C。返回一个代表字符串 S 中每个字符到字符串 S 中的字符 C 的最短距离的数组。

const s = 'loveleetcode'
const c = 'e'

;(function () {

  function getShortestToChar (s, c) {
    const charArr = [] // [ 3, 5, 6, 11 ]
    const reg = new RegExp(c, 'g')
    let res = null
    while (res = reg.exec(s)) {
      charArr.push(res.index)
    }
    
    const sArr = s.split('')
    const arr = []
    sArr.forEach((item, index) => {
      let temp = s.length
      charArr.forEach((item1, index1) => {
        temp = Math.min(Math.abs(item1 - index), temp)
      })
      arr.push(temp)
    })

    return arr
  }

  console.time('getShortestToChar1')
  console.log(getShortestToChar(s, c))
  console.timeEnd('getShortestToChar1')

})();

;(function () {

  function getShortestToChar (s, c) {
    const charArr = [] // [ 3, 5, 6, 11 ]
    for (let i = 0; i < s.length; i++) {
      if (s[i] === c) {
        charArr.push(i)
      }
    }
    
    const sArr = s.split('')
    const arr = []
    sArr.forEach((item, index) => {
      let temp = s.length
      charArr.forEach((item1, index1) => {
        temp = Math.min(Math.abs(item1 - index), temp)
      })
      arr.push(temp)
    })

    return arr
  }

  // for 循环比 while + regexp 的效率更高些
  console.time('getShortestToChar2')
  console.log(getShortestToChar(s, c))
  console.timeEnd('getShortestToChar2')

})();