
// 连续出现次数最多的字符 

const str = '0sf0we0weeewe0w000gvfff'

; (function () {

  function getMostStr(str) {
    let max = 1
    let i = 0
    const arr = []
    for (; i < str.length;) {
      let num = 1
      let j = i + 1
      let _str = str[i]
      while (str[i] === str[j]) {
        j++
        num++
        _str += str[i]
      }
      if (num >= max) {
        arr.push(_str)
        max = num
        _str = ''
      }
      i += num
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

  // 正则表达式中的小括号"()"。是代表分组的意思。 如果再其后面出现\1则是代表与第一个小括号中要匹配的内容相同

  // ***** 连续出现了 5 次，说明总共有 6 个元素

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