; (function () {

  // 为所有数组对象添加 findDuplicate(n) 方法，用于返回该数组中出现频率大于等于 n 的元素列表

  Array.prototype.findDuplicate = function findDuplicate(n) {
    const map = new Map()

    // let left = 0
    // let right = this.length - 1
    // while (left < right) {
    //   if (!map.has(this[left])) {
    //     map.set(this[left], 1)
    //   } else {
    //     map.set(this[left], map.get(this[left]) + 1)
    //   }
    //   if (!map.has(this[right])) {
    //     map.set(this[right], 1)
    //   } else {
    //     map.set(this[right], map.get(this[right]) + 1)
    //   }
    //   left++
    //   right--
    // }

    this.forEach(item => {
      if (!map.has(item)) {
        map.set(item, 1)
      } else {
        map.set(item, map.get(item) + 1)
      }
    })

    const list = []
    map.forEach((value, key) => {
      if (value >= n) {
        list.push(key)
      }
    })

    return list
  }

  Array.prototype.findDup = function findDup (n) {
    return this.reduce((re, val) => {
      const index = re.findIndex(o => o.val === val)    
      if (index >= 0) {
        re[index].n++
      } else {
        re.push({ n: 1, val })
      } 
      return re
    }, []).filter(o => o.n >= n).map(o => o.val)
  }

  const arr = ['a', 'b', 'a', 'c', 'a', 1, 1, 2, 1, '1', 1, 1, 1, 1, 1, 2, 3, 4, 4, 4, 1, 1]

  console.time('findDuplicate')
  console.log(arr.findDuplicate(3))
  console.timeEnd('findDuplicate')

  console.time('findDup')
  console.log(arr.findDup(3))
  console.timeEnd('findDup')

  // findDup 比 findDuplicate 快 3-6 倍

})();