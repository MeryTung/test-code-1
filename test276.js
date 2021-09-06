// https://github.com/zhaoyiming0803/notebook/blob/master/Node.js/module/index.js

/*
const obj = {
  a: 1
}
exports.obj = obj
console.log(module.exports.obj === obj) // true
*/

// 以下，module.exports 或 exports 其中一个指向一个值，都不会跟另一个相等。
// modulex.exports 和 exports 是两个对象，但是默认 exports === module.exports，其中一个指向一个内存地址后，另一个并不会同步改变。
// 所以只能给 module.exports 或 exports 赋值属性。

/*
const obj = {
  a: 1
}

exports = obj
console.log(module.exports) // {}
*/

/*
const obj = {
  b: 1
}

module.exports = obj
console.log(exports) // {}
*/