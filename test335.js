; (function () {

  function Social(config) {
    this.config = config
  }


  Social.prototype.printConfig = function printConfig() {
    return {
      selfConfig: this.config,
      http: this.http()
    }
  }

  Social.prototype.apply = function apply(sdk) {
    sdk.tap('social', this)
  }


  function http(params) {
    return 'this is http'
  }

  
  function Authentication(config) {
    this.config = config
    Authentication.plugins.forEach(plugin => {
      new plugin(config).apply(this)
    })
  }

  Authentication.prototype.tap = function tap(name, ctx) {
    if (this[name]) {
      return console.error(`Plugin ${name} has existed...`)
    }
    ctx.http = http
    this[name] = ctx
  }



  Authentication.plugins = []



  Authentication.use = function use(plugins) {
    this.plugins = plugins
  }



  Authentication.use([
    Social
  ])


  const auth = new Authentication({
    appId: 'this is appId'
  })

  console.log(auth.social.printConfig())


})();
