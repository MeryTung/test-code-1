// 观察者模式 和 发布订阅模式：

// 1、发布订阅模式更灵活，是进阶版的观察者模式，指定对应分发。

// 2、观察者模式维护单一事件对应多个依赖该事件的对象关系；

// 3、发布订阅维护多个事件（主题）及依赖各事件（主题）的对象之间的关系；

// 4、观察者模式是目标对象直接触发通知（全部通知），观察对象被迫接收通知。发布订阅模式多了个中间层（事件中心），由其去管理通知广播（只通知订阅对应事件的对象）；

// 5、观察者模式对象间依赖关系较强，发布订阅模式中对象之间实现真正的解耦。

; (function () {
  // 观察者模式：定义了对象间一种一对多的依赖关系，当目标对象 Subject 的状态发生改变时，所有依赖它的对象 Observer 都会得到通知。
  // 比如：Vue2 在 getter 中收集依赖，setter 中执行 update
  function Observer(fn) {
    this.handler = fn
  }

  function Subject() {
    this.observers = []
  }

  Subject.prototype.add = function addObserver(observer) {
    this.observers.push(observer)
  }

  Subject.prototype.remove = function removeObserver(observer) {
    this.observers.splice(this.observers.indexOf(observer), 1)
  }

  Subject.prototype.notify = function notifyObservers() {
    this.observers.forEach(observer => {
      observer.handler()
    })
  }

  var subject = new Subject()

  var ob1 = new Observer(function () {
    console.log('ob1 callback run')
  })

  subject.add(ob1)

  var ob2 = new Observer(function () {
    console.log('ob2 callback run')
  })

  subject.add(ob2)

  subject.notify()
})();

;(function () {
  // 发布订阅模式与观察者模式的不同，“第三者” （事件中心）出现。
  // 目标对象并不直接通知观察者，而是通过事件中心（下面的 eventMap）来派发通知。
  // pub 里没有直接保存 sub，而是通过 eventMap 这个第三者来派发通知
  // 比如：Vue 中的 EventBus
  function PubSub () {
    this.eventMap = {}
  }

  PubSub.prototype.on = function on (eventName, handler) {
    if (!Array.isArray(this.eventMap[eventName])) {
      this.eventMap[eventName] = []
    }
    this.eventMap[eventName].push(handler)
  }

  PubSub.prototype.emit = function emit () {
    var args = [].slice.call(arguments)
    var eventName = args[0]
    var fields = args.slice(1)
    if (!Array.isArray(this.eventMap[eventName])) {
      throw new Error(`'${eventName}' is not be regist...`)
    }
    this.eventMap[eventName].forEach(handler => handler.apply(this, fields))
  }

  var a = new PubSub()
  a.on('aa', function () {
    console.log('aa-1: ', [].slice.call(arguments, 0))
  })
  a.on('aa', (...args) => {
    // 剪头函数中没有 arguments，可以用 ...args 解构运算符代替
    console.log('aa-2: ', args)
  })
  a.emit('aa', 1, 2, 3, 4)
})();