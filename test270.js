;(function () {

  // WeakSet

  // WeakSet 结构与 Set 类似，也是不重复的值的集合。但是，它与 Set 有两个区别。

  // 首先，WeakSet 的成员只能是对象，而不能是其他类型的值。

  const ws1 = new WeakSet()

  // ws1.add(1) // Invalid value used in weak set

  console.log('ws1: ', ws1)

  // 其次，WeakSet 中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用，
  // 也就是说，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于 WeakSet 之中。

  // WeakSet 适合临时存放一组对象，以及存放跟对象绑定的信息。只要这些对象在外部消失，它在 WeakSet 里面的引用就会自动消失。

  // WeakSet 的成员是不适合引用的，因为它会随时消失。

  // 由于 WeakSet 内部有多少个成员，取决于垃圾回收机制有没有运行，运行前后很可能成员个数是不一样的，而垃圾回收机制何时运行是不可预测的，
  // 因此 ES6 规定 WeakSet 不可遍历。

  const arr = ['a', 'b']
  const obj = {
    name: 'zhaoyiming'
  }
  const ws2 = new WeakSet([arr, obj])

  console.log('ws2.has: ', ws2.has(arr)) // true

  ws2.delete(arr)

  console.log('ws2.has: ', ws2.has(arr)) // false

  // WeakSet 不能遍历，是因为成员都是弱引用，随时可能消失，遍历机制无法保证成员的存在，很可能刚刚遍历结束，成员就取不到了。因为垃圾回收机制的执行时间不确定。
  // WeakSet 的一个用处，是储存 DOM 节点，而不用担心这些节点从文档移除时，会引发内存泄漏。
  // for (let item of ws2) {
  //   console.log('ws2 item: ', item)
  // }

  console.log('ws2.size: ', ws2.size) // undefined
  console.log('ws2.forEach: ', ws2.forEach) // undefined
})();