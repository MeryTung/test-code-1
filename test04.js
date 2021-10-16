(function () {
  const arr = [
    [1, 2, 3, 4],
    ["a", "b", "c"],
    ["A", "B", "C", "D"],
    ["=", "+"]
  ]

  function combineArrayChildren (arr) {
    arr = arr.map((item) => {
      if (Array.isArray(item)) {
        if (item.length) return item
        return ['']
      } else {
        return [item]
      }
    })

    // let res = ['']
    // for (let i = 0; i < arr.length; i += 1) {
    //   res = combineArray(res, arr[i])
    // }
    // return res

    return arr.reduce((arr1, arr2) => {
      return combineArray(arr1, arr2)
    }, [''])
  }

  function combineArray (arr1, arr2) {
    const arr = []
    arr1.forEach(item1 => {
      arr2.forEach(item2 => {
        arr.push(item1 + '' + item2)
      })
    })
    return arr
  }

  console.log(combineArrayChildren(arr));
})();
