;(function () {

  function getRedPackages (money, count) {
    const maxMoney = (money / count) * 0.8
    const arr = []
    let i = 0
    while (i < count) {
      if (i === count - 1) {
        arr.push(money)
      } else {
        let item = Math.min(maxMoney, money * Math.random())
        arr.push(item)
        money = money - item
      }
      i++
    }
    return arr
  }

  const packages = getRedPackages(100, 10)
  console.log('packages: ', packages)

  const sum = packages.reduce((a, b) => {
    return a + b
  }, 0)
  console.log('sum: ', sum)

})();