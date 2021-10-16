;(function () {

  function mergeSort (arr) {
    if (arr.length === 1) {
      return arr
    }

    var middle = Math.floor(arr.length / 2)
    var left = arr.slice(0, middle)
    var right = arr.slice(middle)

    var merged = merge(mergeSort(left), mergeSort(right))

    console.log('merged', merged)

    return merged
  }

  function merge (left /* [2, 5] */, right /* [3, 4] */) {
    var res = []
    var i = 0 
    var j = 0
    var leftLen = left.length
    var rightLen = right.length

    while (i < leftLen && j < rightLen) {
      if (left[i] < right[j]) {
        res.push(left[i++])
      } else {
        res.push(right[j++])
      }
    }
    
    while (i < leftLen) {
      res.push(left[i++])
    }

    while (j < rightLen) {
      res.push(right[j++])
    }

    return res
  }

  console.log(mergeSort([100, 9, 10, 0, 3, 4, 2]))
  console.log(merge([2, 5], [3, 4, 6]))

})();