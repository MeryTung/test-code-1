; (function () {

  const http = require('http')
  const fs = require('fs')

  const publicPath = '.'

  const server = http.createServer((req, res) => {
    if (req.url === '/favicon.ico') {
      return
    }

    const file = fs.readFileSync(publicPath + req.url, 'utf-8')
    const reg = /[1,2]\.js/
    const isNormalJs = reg.test(req.url)

    if (isNormalJs) {
      req.url.replace(reg, ($0, $1) => {
        setTimeout(() => {
          res.writeHead(200)
          res.end(file)
        }, 1000 * Math.random())
      })
      return
    }

    if (/module/.test(req.url)) {
      res.setHeader('Content-Type', 'text/javascript')
      // writeHead must behand of setHeader
      res.writeHead(200)
      res.end(file)
      return
    }

    res.writeHead(200)
    res.end(file)
  })

  server.listen(3000)


})();