;(function () {
  // 通过 stack 判断类似是否是合法的 html 字符串

  function validStr (str) {
    const map = {
      '}': '{',
      ')': '(',
      ']': '['
    }
    const leftList = Object.values(map)
    const stack = []

    for (let i = 0; i < str.length; i++) {
      if (stack.length === 0) {
        stack.push(str[i])
        continue
      }
      if (leftList.indexOf(str[i]) !== -1) {
        stack.push(str[i])
        continue
      }
      if (map[str[i]] !== stack[stack.length - 1]) {
        return false
      }
      stack.pop()
    }

    return true
  }

  console.log(validStr('[{()[]{}}()]'))
  console.log(validStr('[{({)[]{}}()]'))

})();