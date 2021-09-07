;(function () {

  function flat (arr) {
    if (!Array.isArray(arr)) {
      return arr
    }

    let res = []

    arr.forEach(item => {
      res = res.concat(flat(item))
    })
    
    return res
  }

  console.log(flat([1, 2, [3, 4, [5, 6, [7, 8, 9, [10]]]]]))

})();