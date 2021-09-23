;(function () {

  // star component
  // * * * * * | * * * * *

  const starList = (function () {
    const starList = []
    for (let i = 0; i < 10; i++) {
      const type = i < 5 ? 'colorful' : 'gray'
      starList.push({
        value: '*',
        type
      })
    }
    return starList
  })();

  
  function clickStar (index) {
    return starList.slice(4 - index, 9 - index)
  }

  console.log(clickStar(2)) // 评分：3分
  console.log(clickStar(3)) // 评分：4分

})();