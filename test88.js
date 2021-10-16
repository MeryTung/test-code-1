;(function () {

  function mergeSort (arr) {
    if (arr.length <= 1) {
      return arr
    }

    const middleIndex = Math.floor(arr.length / 2)
    const left = arr.slice(0, middleIndex)
    const right = arr.slice(middleIndex)

    const merged = merge(mergeSort(left), mergeSort(right))
    console.log('merged: ', merged)
    return merged
  }

  function merge (left, right) {
    let i = 0
    let j = 0
    let arr = []
    const leftLen = left.length
    const rightLen = right.length

    while (i < leftLen && j < rightLen) {
      if (left[i] < right[j]) {
        arr.push(left[i++])
      } else {
        arr.push(right[j++])
      }
    }

    if (i < leftLen) {
      arr = arr.concat(left.slice(i))
    }

    if (j < rightLen) {
      arr = arr.concat(right.slice(j))
    }

    return arr
  }

  console.log(merge([1, 2], [0, 4]))
  console.log(mergeSort([100, 9, 10, 0, 3, 4, 2]))

})();