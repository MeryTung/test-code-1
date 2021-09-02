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

  // 当所要存储的是简单数据类型，并且 key 都为字符串或者整数或者 Symbol 的时候，优先使用 Object ，因为Object可以使用 字符变量 的方式创建，更加高效。
  // 当需要在单独的逻辑中访问属性或者元素的时候，应该使用 Object。
  // JSON 直接支持 Object，但不支持 Map
  // Map 是纯粹的 hash， 而 Object 还存在一些其他内在逻辑，所以在执行 delete 的时候会有性能问题。所以写入删除密集的情况应该使用 Map。
  // Map 会按照插入顺序保持元素的顺序，而Object做不到。
  // Map 在存储大量元素的时候性能表现更好，特别是在代码执行时不能确定 key 的类型的情况。
})();