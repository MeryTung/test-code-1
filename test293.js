;(function () {

  const list = new Array(1000).fill(null).map((item, index) => index).reduce((res, item) => {
    if (item + '' === item.toString().split('').reverse().join('') && item > 100) {
      return res.concat(item)
    }
    return res
  }, [])

  console.log(list)


})();