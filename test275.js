; (function () {
  // 观察者模式 
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
  // 发布订阅者模式
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