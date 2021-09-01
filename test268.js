;(function () {

  // 寻找字符串的最大回文子串

  const str1 = '12345678765'
  const str2 = 'asdfggfsa'
  const str3 = 'asdsa1221'
  const str4 = 'asdfg'

  // #1#2#3#4#5#6#7#8#7#6#5#
  function searchMaxPalindrome (str) {
    const newStr = '#' + str.split('').join('#') + '#'
    let num = 0
    let res = ''
    for (let i = 0; i < newStr.length; i++) {
      let palindromeStr = newStr[i]
      let left = i - 1
      let right = i + 1
      while (newStr[left] === newStr[right]) {
        palindromeStr = newStr[left--] + palindromeStr + newStr[right++]
      }
      if (palindromeStr.length > num) {
        num = palindromeStr.length
        res = palindromeStr
      }
    }
    return res.replace(/#/g, '')
  }

  console.log(searchMaxPalindrome(str1))
  console.log(searchMaxPalindrome(str2))
  console.log(searchMaxPalindrome(str3))
  console.log(searchMaxPalindrome(str4))


})();