;(function () {
  // 通过 stack 判断类似是否是合法的 html 字符串

  function validStr (str) {
    const map = {
      '}': '{',
      ')': '(',
      ']': '['
    }
    const leftMap = Object.values(map).reduce((map, value) => {
      map[value] = true
      return map
    }, {})

    const stack = []

    for (let i = 0; i < str.length; i++) {
      if (stack.length === 0) {
        stack.push(str[i])
        continue
      }
      if (leftMap[str[i]]) {
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