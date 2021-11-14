const list = [{
  price: 400,
  weight: 5
}, {
  price: 500,
  weight: 5
}, {
  price: 200,
  weight: 3
}, {
  price: 300,
  weight: 4
}, {
  price: 350,
  weight: 3
}]

;(function () {

  return

  // 使用贪心算法解决背包问题局部最优解

  function getHighestValue (list, capacity) {
    const _list = list.map(item => {
      return {
        ...item,
        ratio: item.price / item.weight
      }
    })
    
    _list.sort((a, b) => b.ratio - a.ratio)

    let currentCapacity = 0
    let i = 0
    while (currentCapacity < capacity && i < _list.length) {
      const remainedCapacity = capacity - currentCapacity
      const { weight, price } = _list[i]
      if (remainedCapacity >= weight) {
        currentCapacity += weight
        i++
      } else {
        currentCapacity += weight * (remainedCapacity / weight)
      }
    }

    return currentCapacity
  }

  console.log('背包的最大价值：', getHighestValue(list, 10))

})();

;(function () {

  function getHighestValue (list, capacity) {
    // 商品数量
    const n = list.length
    // 商品价格
    const p = list.map(item => item.price)
    // 商品重量
    const w = list.map(item => item.weight)

    let preResults = []
    for (let i = 0; i <= capacity; i++) {
      if (i < w[0]) {
        preResults[i] = 0
      } else {
        preResults[i] = p[0]
      }
    }

    let result = []
    for (let i = 0; i < n; i++) {
      for (let j = 0; j <= capacity; j++) {
        if (j < w[i]) {
          result[j] = preResults[j]
        } else {
          result[j] = Math.max(preResults[j], preResults[j - w[i]] + p[i])
        }
      }
      preResults = result
    }

    return result
  }

  console.log(getHighestValue(list, 10))

})();
