(function () {
  // binary search
  // 二分查找的数组必须是有序列表
  // 对于连续的数字，可以直接用中间值作为二分，否则，需要用中间索引作为二分
  // 将索引作为二分是比较靠谱的
  var arr = [1, 2, 3, 100, 4, 8, 101, 54, 93, 27, 65];

  // function search (arr, target) {
  //   if (arr.length <= 1) {
  //     if (target === arr[0]) return target
  //     return
  //   }
  //   const middleIndex = Math.floor(arr.length / 2)
  //   if (target > arr[middleIndex]) {
  //     return search(arr.slice(middleIndex), target)
  //   } else if (target < arr[middleIndex]) {
  //     return search(arr.slice(0, middleIndex), target)
  //   } else {
  //     return target
  //   }
  // }

  function search(arr, target) {
    let middleIndex;
    while ((middleIndex = Math.ceil(arr.length / 2))) {
      if (arr.length === 0) {
        return;
      }
      if (target > arr[middleIndex]) {
        arr = arr.slice(middleIndex);
      } else if (target < arr[middleIndex]) {
        arr = arr.slice(0, middleIndex);
      } else {
        return target;
      }
    }
  }

  console.log(
    search(
      arr.sort((a, b) => a - b),
      8
    )
  );
})();

;(function () {

  const arr = [1, 4, 8, 10, 20, 77, 88, 91, 93, 100]
  
  function search (arr, target) {
    // let min = arr[0]
    // let max = arr[arr.length - 1]
    
    // while (min < max) {
    //   let middle = Math.floor((min + max) / 2)
    //   if (middle > target) {
    //     max = middle
    //   } else if (middle < target) {
    //     min = middle
    //   } else {
    //     return middle
    //   }
    // }

    while (arr.length > 1) {
      const minIndex = 0
      const middleIndex = Math.floor(arr.length / 2)
      if (arr[middleIndex] > target) {
        arr = arr.slice(minIndex, middleIndex)
      } else if (arr[middleIndex] < target) {
        arr = arr.slice(middleIndex)
      } else {
        return arr[middleIndex]
      }
    }

    if (target === arr[0]) return target
    

    // if (arr.length <= 1) {
    //   if (target === arr[0]) return target
    //   return
    // }

    // const minIndex = 0
    // const maxIndex = arr.length - 1
    // const middleIndex = Math.floor((minIndex + maxIndex) / 2)
    // if (arr[middleIndex] < target) {
    //   return search(arr.slice(middleIndex), target)
    // } else if (arr[middleIndex] > target) {
    //   return search(arr.slice(minIndex, middleIndex), target)
    // } else {
    //   return target
    // }
  }

  console.log(search(arr, 8))

})();