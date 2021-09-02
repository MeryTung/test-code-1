;(function () {

  // Set

  // keys方法、values方法、entries方法返回的都是遍历器对象。
  // 由于 Set 结构没有键名，只有键值（或者说键名和键值是同一个值），所以keys方法和values方法的行为完全一致

  const s1 = new Set()

  s1.add(1)
  s1.add('1')
  s1.add(1)

  console.log('s.size: ', s1.size)
  console.log('s.has: ', s1.has(1))
  console.log('s.keys: ', s1.keys())
  console.log('s.values: ', s1.values())
  console.log('s.entries: ', s1.entries())

  // Set 结构的键名就是键值（两者是同一个值），因此第一个参数与第二个参数的值永远都是一样的。

  const s2 = new Set(['a', 'b'])

  console.log('s2.keys: ', s2.keys())
  console.log('s2.values: ', s2.values())
  console.log('s2.entries: ', s2.entries())

  for (let item of s2) {
    console.log('for of s2 item: ', item) // a b
  }
  
  s2.forEach((item, key) => {
    console.log('forEach s2 item-key: ', item, '-', key) // a-a b-b
  })

  // 扩展运算符（...）内部使用for...of循环，所以也可以用于 Set 结构。
  const arr2 = [...s2]
  console.log('arr2: ', arr2) // [ 'a', 'b' ]

})();