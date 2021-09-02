;(function () {

  // Map

  // “键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键
  const arr = [
    ['name', 'zhaoyiming'],
    ['age', 18]
  ]

  const m1 = new Map()

  arr.forEach(([key, value]) => {
    m1.set(key, value)
  })
  console.log('m1: ', m1)

  // 如果 Map 的键是一个简单类型的值（数字、字符串、布尔值），则只要两个值严格相等，Map 将其视为一个键，
  // 比如0和-0就是一个键，布尔值true和字符串true则是两个不同的键。
  // 另外，undefined和null也是两个不同的键。
  // 虽然NaN不严格相等于自身，但 Map 将其视为同一个键。
  // 如果 set 的 key 值已存在，则对应的 value 将会被覆盖。

  m1.set(+0, 'a')
  console.log('get -0: ',m1.get(-0)) // a

  // 使用 ... 扩展运算符可以方便的将 Map 转为 Array
  console.log('...m1: ', ...m1) // [ 'name', 'zhaoyiming' ] [ 'age', 18 ] [ 0, 'a' ]

  const obj = {
    sex: 'man'
  }

  m1.set(obj, true)
  console.log('m1: ', m1)

  console.log('...m1: ', ...m1) // [ 'name', 'zhaoyiming' ] [ 'age', 18 ] [ 0, 'a' ] [ { sex: 'man' }, true ]

})();