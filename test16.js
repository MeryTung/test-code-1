;(function () {

    var cityList = [
      {id: 1, pid: 0, name: '北京市'},
      {id: 2, pid: 1, name: '朝阳区'},
      {id: 3, pid: 1, name: '东城区'},
      {id: 4, pid: 0, name: '山西省'},
      {id: 5, pid: 4, name: '太原市'},
      {id: 6, pid: 5, name: '杏花岭区'}
    ];
  
    function formatArrayChildren (arr, pid = 0) {
      var res = [];
      
      for (var i = 0; i < arr.length; i += 1) {
        var cur = arr[i];
        
        if (cur.pid === pid) {
          cur.children = formatArrayChildren(arr, cur.id);
          res = res.concat(cur);
        }
      }
  
      return res;
    }
  
    var formatedCityList = formatArrayChildren(cityList);
    console.log(formatedCityList);
    console.log('-----------------');
  
    function normalizeArrayChildren (arr, pid = 0) {
      var res = [];
  
      for (var i = 0; i < arr.length; i += 1) {
        var cur = arr[i];
  
        res.push(cur);
  
        if (cur.pid === pid) {
          res = res.concat(normalizeArrayChildren(cur.children, cur.id));
        }
  
        delete cur.children;
      }
  
      return res;
    }
  
    var $cityList = normalizeArrayChildren(formatedCityList);
    console.log($cityList);
  
  })();