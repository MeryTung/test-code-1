;(function () {

  const vm = require('vm')

  const context = {
    a: 1,
    b: 2
  }

  console.log(vm.runInNewContext('a + b', context)) // 3

  console.log(vm.runInNewContext('() => a + b', context)()) // 3

  const template0 = '`' + 'hello: ${a}' + '`'
  console.log('template0: ', template0)
  console.log(vm.runInNewContext(template0, {
    a: 3
  })) // hello: 3

  // const fs = require('fs')
  // const template1 = fs.readFileSync('./test327.html', 'utf8').toString()
  // console.log(vm.runInNewContext('`' + `${template1}` + '`', context))

  with (context) {
    console.log(a + b) // 3
  }

})();

;(function () {
  
  return

  const fs = require('fs')
  const vm = require('vm')

  const templateMap = {
    index: fs.readFileSync('./test327.htm', 'utf8'),
    header: fs.readFileSync('./test327-header.htm', 'utf8'),
    content: fs.readFileSync('./test327-content.htm', 'utf8'),
    footer: fs.readFileSync('./test327-footer.htm', 'utf8')
  }

  const context = {
    a: 100,
    b: 200,
    headerName: 'this is header',
    contentName: 'this is content',
    footerName: 'this is footer',
    include: function (name) {
      return templateMap[name]
    }
  }

  Object.keys(templateMap).forEach(key => {
    const temp = templateMap[key];
    templateMap[key] = vm.runInNewContext('`' + `${temp}` + '`', context)
  })

  console.log(vm.runInNewContext('`' + `${templateMap.index}` + '`', context))

})();

(function () {

  const fs = require('fs')
  const vm = require('vm')

  const templateMap = {
    index: fs.readFileSync('./test327.htm', 'utf8'),
    header: fs.readFileSync('./test327-header.htm', 'utf8'),
    content: fs.readFileSync('./test327-content.htm', 'utf8'),
    footer: fs.readFileSync('./test327-footer.htm', 'utf8')
  }

  const context = {
    a: 100,
    b: 200,
    headerName: 'this is header',
    contentName: 'this is content',
    footerName: 'this is footer',
    include: function (name) {
      return templateMap[name]()
    }
  }

  Object.keys(templateMap).forEach(key => {
    const value = '`' + templateMap[key] + '`'
    templateMap[key] = vm.runInNewContext(`() => ${value}`, context)
  })

  console.log(templateMap.header.toString())
  console.log(templateMap.index.toString())
  console.log(templateMap.index())

})();