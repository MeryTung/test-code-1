;(function () {


  function sum (num) {
    if (num > 0) {
      return num + sum(--num)
    }
    return num
  }

  console.log(sum(10))


})();
