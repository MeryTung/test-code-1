;(function () {

  function compareVersion (v1, v2) {
    let s1 = v1.split('.')
    let s2 = v2.split('.')
    const maxLen = Math.max(s1.length, s2.length)

    s1 = s1.concat(new Array(maxLen - s1.length).fill(0))
    s2 = s2.concat(new Array(maxLen - s2.length).fill(0))
    
    for (let i = 0; i < maxLen; i++) {
      if (s1[i] - 0 < s2[i] - 0) {
        return -1
      } else if (s1[i] - 0 > s2[i] - 0) {
        return 1
      }
    }

    return 0
  }

  console.log(compareVersion('1.2.0', '1.2.0'))
  console.log(compareVersion('1.3.0', '1.2.0'))
  console.log(compareVersion('1.2.1', '1.2.2'))
  console.log(compareVersion('1.2', '1.2.1'))
  console.log(compareVersion('1.2', '1.2.0.1'))

})();