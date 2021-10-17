; (function () {

  let str = 'my name is {{ name }}, age is {{ age }}'
  let data = { name: 'tom', age: 16 }

  function simpleTemplateCompiler(str, data) {
    return str.replace(/\{\{\s+?(\w+)\s+?\}\}/g, function ($0, $1) {
      return data[$1]
    })
  }

  console.log(simpleTemplateCompiler(str, data))

})();