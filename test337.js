function http(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data)
    }, Math.random() * 1000)
  })
}

function createProxy(target) {
  const proxy = createHttpProxy()
  return new Proxy(target, {
    get: proxy,
    set: proxy
  })
}

function createHttpProxy() {
  // 下面两种 case，都可以做到只传参数（URL、method、data），新增 API 不改动 SDK 代码。
  // 把所有的 method 全部用 get 或 post，SDK 内部用没问题，对外就有点别扭了
  // 但是前端传标识，然后后端根据标识将请求转发给对应的 action，不知道会不会有性能压力。
  // 前端高度抽象不做改动，那就需要后端改动或一个机制去保障。
  return (target, prop) => {
    if (
      // case 1：需要一个固定的方法名：call
      typeof target[prop] === 'function' && target[prop].name === 'call' ||
      // case 2：高度抽象，具体方法名在前端代码中不存在，通过代理的方法直接发送 http 请求
      // 但是有点像 BUG
      typeof target[prop] === 'undefined'
    ) {
      return createHttpZone(target, prop)
    }

    return target[prop]
  }
}

function createHttpZone(target, prop) {
  return (...args) => {
    return http(...args)
  }
}

class Person {
  constructor(name) {
    this.name = name
    return this.default()
  }

  default() {
    return createProxy(this)
  }

  call (data) {
    // 额外逻辑处理
    return http(data)
  }

  say() {
    console.log('Hi, I\'m ' + this.name)
  }

  coding(data) {
    return http(data)
  }
}


const person1 = new Person('zhangsan')

person1.say()
person1.coding(1).then(res => {
  console.log('person1 coding: ', res)
})

person1.call('call').then(res => {
  console.log('person1 call: ', res)
})

const person2 = new Person('lisi')

person2.say()
person2.coding(2).then(res => {
  console.log('person2 coding: ', res)
})

// 不存在 haha 这个 function
person2.haha(3).then(res => {
  console.log('person2 haha: ', res)
})