; (function () {

  // Symbol 表示独一无二的意思，参数只是为了方便区分 Symbol 的返回值，就算参数相同，它们的返回值也不相等。
  // 如果 Symbol 的参数是对象，则会调用该对象的 toString 方法。
  // Symbol 值不能与其他类型的值进行运算，会报错

  const s1 = Symbol('s')
  const s2 = Symbol('s')
  console.log('s1 === s2: ', s1 === s2) // false
  console.log('s1 == s2: ', s1 === s2) // false
  console.log('type: ', typeof s1) // symbol

  const obj = {
    a: 1,
    b: 2
  }
  var s3 = Symbol(obj)
  console.log('s3: ', s3) // Symbol([object Object])

  obj.toString = function () {
    return this.a + this.b
  }
  const s4 = Symbol(obj)
  console.log('s4 custom toString: ', s4) // Symbol(3)

  console.log('s4.description: ', s4.description) // 3
  console.log('s3.description: ', s3.description) // [object Object]
  console.log('s2.description: ', s2.description === 's') // true


  const s5 = Symbol('s5')
  const s6 = Symbol('s6')
  const obj2 = {
    a: 1,
    b: 2,
    [s5]: 'ss55',
    [s6]: 'ss66',
  }
  // Symbol 作为属性名，遍历对象的时候，该属性不会出现在for...in、for...of循环中，
  // 也不会被Object.keys()、Object.getOwnPropertyNames()、JSON.stringify()返回
  for (const key in obj2) {
    console.log('for in key of obj2: ', key) // a b
  }
  console.log('Object.keys: ', Object.keys(obj2)) // []
  console.log('Object.getOwnPropertySymbols: ', Object.getOwnPropertySymbols(obj2)) // [ Symbol(s5), Symbol(s6) ]

  const myIterable = {}
  myIterable[Symbol.iterator] = function* () {
    yield 1
    yield 2
    yield 3
  }

  // 对象的 Symbol.iterator 属性，指向该对象的默认遍历器方法
  // 对象进行 for...of 循环时，会调用 Symbol.iterator 方法，返回该对象的默认遍历器
  const iterator = Symbol.iterator
  console.log('Symbol.iterator: ', iterator) // Symbol(Symbol.iterator)
  console.log('typeof Symbol.iterator: ', typeof iterator) // symbol
  for (let prop of myIterable) {
    console.log('iterator prop: ', prop) // 1 2 3
  }
})();