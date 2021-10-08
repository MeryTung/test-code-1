;(function () {
    // 函数的执行是一个入栈出栈的过程，递归函数后面的变量永远是属于上一步的

    var cityList = [
      {id: 1, pid: 0, name: '北京市'},
      {id: 2, pid: 1, name: '朝阳区'},
      {id: 3, pid: 1, name: '东城区'},
      {id: 4, pid: 0, name: '山西省'},
      {id: 7, pid: 2, name: '望京'},
      {id: 5, pid: 4, name: '太原市'},
      {id: 6, pid: 5, name: '杏花岭区'}
    ];
  
    function formatArrayChildren (arr, pid = 0) {
      // res 是第一层
      // for循环中的 city 是第二层
      // 递归执行的 formatArrayChildren 是第三层
      // 层层嵌套，形成最终的树状结构
      const res = []
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].pid === pid) {
          arr[i].children = formatArrayChildren(arr, arr[i].id)
          res.push(arr[i])
        }
      }
      return res
    }
    
    const formatedArrayChildren = formatArrayChildren(cityList)
    console.log(formatedArrayChildren)
    console.log('-----------------')
  
    function normalizeArrayChildren (arr) {
      let res = []
      if (!Array.isArray(arr)) {
        return res
      }
      for (let i = 0; i < arr.length; i++) {
        res.push(arr[i])
        res = res.concat(normalizeArrayChildren(arr[i].children))
        delete arr[i].children
      }
      return res
    }
  
    console.log(normalizeArrayChildren(formatedArrayChildren))
  
  })();