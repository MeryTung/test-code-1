
// 连续出现次数最多的字符 

const str = '0sf0we0weeewe0w000gvfff'

; (function () {

  function getMostStr(str) {
    const arr = []
    let max = 1
    for (let i = 0; i < str.length;) {
      let j = i + 1
      let _str = str[i]
      while (str[i] === str[j]) {
        _str += str[j]
        j++
      }
      const len = _str.length
      if (len >= max) {
        max = len
        arr.push(_str)
        _str = ''
      }
      i = j
    }
    
    const maxLen = Math.max.apply(null, arr.map(item => item.length))
    return arr.reduce((map, item) => {
      if (item.length === maxLen) {
        map[item[0]] = maxLen
      }
      return map
    }, {})
  }

  console.log(getMostStr(str))

})();

; (function () {

  // \1必须与小括号配合使用。

  // 正则表达式中的小括号"()"。是代表分组的意思。 如果在其后面出现 \1 则是代表与第一个小括号中要匹配的内容相同

  // ***** 连续出现了 5 次，说明总共出现 6 次

  function getMostStr(str) {
    const arr = str.match(/(\w)\1+/g)
    const maxLen = Math.max(...arr.map(s => s.length))
    return arr.reduce((map, item) => {
      if (item.length === maxLen) {
        map[item[0]] = maxLen
      }
      return map
    }, {})
  }

  console.log(getMostStr(str))

})();