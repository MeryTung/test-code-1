;(function () {

  function searchIndexByName (name, arr) {
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

  function getTarget (name, arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][0] === name) {
        return arr[i]
      }
    }
  }
  
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

  console.log(searchIndexByName('e', arr1))
  console.log(searchIndexByName('e', arr2))
  console.log(searchIndexByName('e', arr3))
  console.log(searchIndexByName('e', arr4))

})();