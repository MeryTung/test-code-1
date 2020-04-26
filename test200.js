(function () {
  var url = "https://github.com/zymfe?a=1&b=2&c=3";

  function getQueryBySplit(url) {
    var query = {};
    var mark = url.indexOf("?");
    if (mark === -1) {
      return query;
    }
    var search = url.slice(mark + 1);
    search.split("&").forEach((item) => {
      var [key, value] = item.split("=");
      query[key] = value;
    });
    return query;
  }

  console.log(getQueryBySplit(url));

  function getQueryByRegExp(url) {
    var query = {};
    var reg = /[\?\&]?(\w+)=(\w+)&?/gim;
    url.replace(reg, ($0, $1, $2) => {
      query[$1] = $2;
    });
    return query;
  }
  console.log(getQueryByRegExp(url));
})();
