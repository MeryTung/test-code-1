const obj = {
  a: {
    b: {
      c: 1
    }
  }
}

function createProxy (obj) {
  return new Proxy(obj, {
    get (target, prop) {
      if (!target[prop]) {
        return
      }
      if (typeof target[prop] === 'object') {
        return createProxy(target[prop])
      } 
      console.log('hello world')
      return target[prop]
    },
    set (target, prop, value) {
      console.log(target)
      console.log(prop)
      console.log(value)
      target[prop] = value
    }
  })
}

const proxy = createProxy(obj)

// console.log(proxy.a.b)

proxy.a.b.c = {ddd: 'ddd'}
console.log(proxy.a.b.c.ddd)