(function () {
  // https://github.com/zymfe/test-code/blob/master/test169.js
  var str = "1234567891.102";

  function formatPriceStr(str) {
    var priceStr = "";
    var pointIdx = str.indexOf(".");
    var integer = "";
    var decimal = "";

    if (pointIdx > -1) {
      integer = str.substr(0, pointIdx);
      decimai = str.substr(pointIdx);
    } else {
      integer = str;
    }

    var num = 0;
    var arr = [];
    for (var i = integer.length - 1; i >= 0; i -= 1) {
      arr.push(integer[i]);
      if ((num + 1) % 3 === 0 && i !== 0) {
        arr.push(",");
      }
      num += 1;
    }

    return arr.reverse().join("") + decimai;
  }

  console.log(formatPriceStr(str));
})();
