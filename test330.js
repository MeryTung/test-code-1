;(function () {

  const { formatedArrayChildren } = require('./test16')

  const path = [1, 0]

  const target = path.reduce((target, p, index) => {
    if (index === path.length - 1) {
      return target[p]
    } else {
      return target[p].children
    }
  }, formatedArrayChildren)

  console.log('target: ', target)

})();