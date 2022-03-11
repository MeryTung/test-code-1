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
  return (target, prop) => {
    if (!(prop in target)) {
      return
    }

    if (typeof target[prop] === 'function') {
      return createHttpZone(target, prop)
    }

    return target[prop]
  }
}

function createHttpZone(target, prop) {
  return (...args) => {
    return target[prop](...args)
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

const person2 = new Person('lisi')

person2.say()
person1.coding(2).then(res => {
  console.log('person2 coding: ', res)
})
