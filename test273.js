const arr1 = [
  ['e', 83], // 4
  ['h', 100],// 7 
  ['a', 60], // 1
  ['b', 65], // 3
  ['c', 62], // 2
  ['f', 87], // 5
  ['g', 59], // 0
  ['d', 99]  // 6
]

const arr2 = [
  ['a', 60], // 1
  ['b', 65], // 3
  ['c', 62], // 2
  ['f', 87], // 5
  ['g', 59], // 0
  ['d', 99],  // 6
  ['e', 83] // 4
]

const arr3 = [
  ['h', 100], // 7
  ['e', 83], // 4
  ['a', 60], // 1
  ['b', 65], // 3
  ['c', 62], // 2
  ['f', 87], // 5
  ['g', 59], // 0
  ['d', 99]  // 6
]

const arr4 = [
  ['a', 60], // 1
  ['e', 83], // 4
  ['b', 65], // 3
  ['h', 100], // 7
  ['c', 62], // 2
  ['f', 87], // 5
  ['g', 59], // 0
  ['d', 99]  // 6
]

; (function () {

  function searchIndexByName(name, arr) {
    const target = getTarget(name, arr)

    let left = 0
    let right = arr.length - 1
    let index = 0
    while (left < right) {
      if (arr[left][1] < target[1]) {
        index++
      }
      if (arr[right][1] < target[1]) {
        index++
      }
      left++
      right--
    }

    return index
  }

  function getTarget(name, arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][0] === name) {
        return arr[i]
      }
    }
  }

  console.log(searchIndexByName('e', arr1))
  console.log(searchIndexByName('e', arr2))
  console.log(searchIndexByName('e', arr3))
  console.log(searchIndexByName('e', arr4))

})();

; (function () {

  return

  function searchIndexByName(name, arr) {
    const target = getTarget(name, arr)

    const map = arr.reduce((map, item) => {
      map[Symbol(item[1])] = item[0]
      return map
    }, {})

    // node.js v10.16.0 中 不支持 symbol 的 description 属性
    // 在高版本的 node 环境和浏览器环境中是支持的
    const numbers = Object.getOwnPropertySymbols(map)
      .map(item => +item.description)
      .sort((a, b) => a - b)

    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] === target[1]) {
        return i
      }
    }
  }

  function getTarget(name, arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][0] === name) {
        return arr[i]
      }
    }
  }


  console.log(searchIndexByName('e', arr1))
  console.log(searchIndexByName('e', arr2))
  console.log(searchIndexByName('e', arr3))
  console.log(searchIndexByName('e', arr4))

})();

;(function () {

  const arr = [5, 9, 0, 1, 100, 89, 50, 90, 41]

  function searchIndex (num, arr) {
    // 索引从 0 开始，总会匹配到一个值，最小索引是 0
    // 如果匹配不到，那就返回 -1，表示不存在对应的 num
    // let index = -1
    // for (let i = 0; i < arr.length; i++) {
    //   if (arr[i] < num) {
    //     index++
    //     continue
    //   } 
    //   if (arr[i] > num) {
    //     continue
    //   }
    // }
    // return index

    const list = []
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] <= num) {
        list.push(arr[i])
        continue
      }
      if (arr[i] > num) {
        continue
      }
    }
    // list 中的值没有排序，所有小于等于 num 的值都被 push 到了 list 中，所以 list 中最后一个值就是要找的 num 的索引
    // 如果 arr 中相同的 num，则这里返回最后的那个索引，这个跟上面注释的正好相反
    return list.length - 1
  }

  console.log(searchIndex(89, arr))

})();