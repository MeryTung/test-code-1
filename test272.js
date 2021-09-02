;(function () {

  // WeakMap

  // WeakMap结构与Map结构类似，也是用于生成键值对的集合。

  // WeakMap与Map的区别有两点。

  // 首先，WeakMap只接受对象作为键名（null除外），不接受其他类型的值作为键名。

  // 其次，WeakMap的键名所指向的对象，不计入垃圾回收机制。

  // WeakMap 的键名所引用的对象都是弱引用，即垃圾回收机制不将该引用考虑在内。
  // 因此，只要所引用的对象的其他引用都被清除，垃圾回收机制就会释放该对象所占用的内存。
  // 也就是说，一旦不再需要，WeakMap 里面的键名对象和所对应的键值对会自动消失，不用手动删除引用。

  const wm1 = new WeakMap()

  let key = [1, 2, 3]
  let value = {
    a: 1,
    b: 2
  }

  wm1.set(key, value)

  // key 是弱引用，但也是引用的内存地址 key !== [1, 2, 3]
  console.log('wm1.has(key): ', wm1.has(key)) // true
  console.log('wm1.has([1, 2, 3]): ', wm1.has([1, 2, 3])) // false

  // 键值 key 是正常引用。所以，即使在 WeakMap 外部消除了 key 的引用，WeakMap 内部的引用依然存在。
  // 只是弱引用，这种情况下，垃圾回收机制执行的时候，就会删除 key value 占用的内存
  value = null
  console.log('wm1.get(key), value = null: ', wm1.get(key)) // { a: 1, b: 2 }

  // 项目中可以把 dom 对象作为 WeakMap 的 key 值

})();