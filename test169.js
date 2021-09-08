(function () {
  // https://github.com/zhaoyiming0803/test-code/blob/master/test19.js
  const str = "1234567891.102";

  function formatPriceStr(str) {
    const pointIdx = str.indexOf(".");
    return (
      str
        .substring(0, pointIdx)
        .split("")
        .reverse()
        .join("")
        .replace(/\d{3}/g, ($0, $1) => {
          return $0 + ",";
        })
        .split("")
        .reverse()
        .join("") + str.substr(pointIdx)
    );
  }

  console.log(formatPriceStr(str));
})();
