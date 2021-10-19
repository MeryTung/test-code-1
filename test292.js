;(function () {

  // 最长上升子序列：给定一个无序的整数数组，找到其中最长上升子序列的长度

  const arr = [2, 3, 5, 1, 8, 9, 4, 6, 7, 12, 0, 1, 2, 3]

  function searchMaxLength (arr) {
    const childList = []
    for (let i =  0; i < arr.length;) {
      let j = i + 1
      const tempList = [arr[i]]
      while (arr[j] > tempList[tempList.length - 1]) {
        tempList.push(arr[j])
        j += 1
      }
      if (childList.length === 0 || tempList.length >= childList[childList.length - 1].length) {
        childList.push(tempList)
      }
      i = j
    }

    const maxLength = Math.max(...childList.map(item => item.length))
    return childList.reduce((list, childItem) => {
      if (childItem.length === maxLength) {
        return list.concat([childItem])
      }
      return list
    }, [])
  }

  console.log(searchMaxLength(arr))

})();