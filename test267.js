;(function () {
  // 判断字符串是否是回文

  const str1 = '123454321'
  const str2 = '12344321'
  const str3 = '123454311'

  function isPalindrome (str) {
    return str === str.split('').reverse().join('')
  }

  console.log(isPalindrome(str1)) // true
  console.log(isPalindrome(str2)) // true
  console.log(isPalindrome(str3)) // false

})();