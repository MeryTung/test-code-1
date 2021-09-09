(function () {
  // 连续最大不重复子串
  const str = "asdfgfweaka1234567890a";

  function getMaxSubstrByRecursive(str) {
    const map = new Map();
    let maxStr = "";
    const length = str.length;

    handler(0);

    function handler(start) {
      for (let i = start; i < length; i++) {
        if (!map.has(str[i])) {
          map.set(str[i], true);
        } else {
          const temp = str.slice(start, i);
          if (maxStr.length < temp.length) {
            maxStr = temp;
          }
          map.clear();
          handler(start + 1);
          break;
        }
      }
    }

    return maxStr;
  }

  function getMaxSubstrByWhile (str) {
    let maxStr = ''
    let map = {}
    for (let i = 0; i < str.length; i++) {
      let j = i
      while (str[j]) {
        if (!map[str[j]]) {
          map[str[j]] = true
          j++
        } else {
          const temp = str.slice(i, j)
          if (temp.length > maxStr.length) {
            maxStr = temp
          }
          map = {}
          break
        }
      }
    }
    return maxStr
  }

  // 对比之下，递归慢一些，以上 str，while平均 是 递归的 2 倍
  console.time('getMaxSubstrByRecursive')
  const res1 = getMaxSubstrByRecursive(str)
  console.timeEnd('getMaxSubstrByRecursive')

  console.time('getMaxSubstrByWhile')
  const res2 = getMaxSubstrByWhile(str)
  console.timeEnd('getMaxSubstrByWhile')

  console.log('res1 === res2: ', res1 === res2)
  console.log('res1: ', res1)

})();
