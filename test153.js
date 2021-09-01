(function () {
  // mock vuex data struct

  const options = {
    state: {
      a: 1,
      b: 2,
    },
    mutations: {
      CHANGE_A() { },
    },
    actions: {
      changeA() { },
    },
    modules: {
      hello: {
        namespaced: true,
        state: {
          a: 1,
          b: 2,
        },
        mutations: {
          CHANGE_A() { },
          CHANGE_B() { }
        },
        actions: {
          changeA() { },
        },
        modules: {
          hi: {
            state: {
              a: 1,
              b: 2,
            },
            mutations: {
              CHANGE_A() { },
            },
            actions: {
              changeA() { },
            },
          },
        },
      },
      world: {
        namespaced: true,
        state: {
          a: 1,
          b: 2,
        },
        mutations: {
          CHANGE_A() { },
        },
        actions: {
          changeA() { },
        },
      },
    },
  }

  function createStore(options) {
    const store = {
      _mutations: Object.create(null),
      _actions: Object.create(null),
    }
    installModule(store, options, [])
    return store
  }

  function installModule(store, options, path) {
    const namespace = getNamespace(path)

    forEachState(store, namespace, options.state)
    forEachMutation(store, namespace, options.mutations)
    forEachAction(store, namespace, options.actions)
    forEachChild(store, options.modules, path)    
  }

  function getNamespace(path) {
    return path.length
      ? path.reduce(
        (namespace, key) => (namespace ? namespace + '/' + key : key),
        ''
      )
      : ''
  }

  function forEachState(store, namespace, value) {
    if (!value) return

    const obj = !namespace
      ? store
      : store[namespace] || (store[namespace] = {})

    Object.keys(value).forEach((key) => {
      obj[key] = value[key]
    })
  }

  function forEachMutation(store, namespace, value) {
    if (!value) return

    Object.keys(value).forEach((key) => {
      const type = namespace ? `${namespace}/${key}` : key
      const entry = store._mutations[type] || (store._mutations[type] = [])
      entry.push(function wrappedMutationHandler (payload) {
        value[key].call(store, {
          commit: function () {},
          dispatch: function () {}
        }, payload)
      })
    })
  }

  function forEachAction(store, namespace, value) {
    if (!value) return

    Object.keys(value).forEach((key) => {
      const type = namespace ? `${namespace}/${key}` : key
      const entry = store._actions[type] || (store._actions[type] = [])
      entry.push(function wrappedActionHandler (payload) {
        let res = value[key].call(store, {
          dispatch: function () {},
          commit: function () {},
          getters: {},
          state: {},
          rootGetters: {},
          rootState: {}
        }, payload)
        if (!isPromise(res)) {
          res = Promise.resolve(res)
        }
        return res
      })
    })
  }

  function forEachChild (store, modules, path) {
    if (modules) {
      Object.keys(modules).forEach((key) => {
        installModule(store, modules[key], path.concat(key))
      })
    }
  }

  function isPromise (val) {
    return val && typeof val.then === 'function'
  }

  const store = createStore(options)
  console.log(store)
  console.log(store._mutations['hello/hi/CHANGE_A'])
})()
