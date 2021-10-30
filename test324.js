const css = require('css')

;(function () {

  const cssContent = `
    @import '../../reset.css';

    body {
      font-size: 30px;
      color: #000;
    }

    /* this is a comment */
    .container1, .container2 {
      display: flex;
    }
  `

  const ast = css.parse(cssContent)
  console.log('ast: ', ast)

  ast.stylesheet.rules[1].declarations[1].value = '#f00'

  console.log(css.stringify(ast))

})();