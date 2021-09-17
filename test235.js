;(function () {

  const vnode = {
    tag: 'div',
    children: [{
      tag: 'p',
      children: [{
        tag: 'span',
        expression: "a+b"
      }]
    }, {
      tag: 'div'
    }]
  }

  function genNode (node) {
    return node ? genElement(node) : '_c("div")'
  }

  function genElement (node) {
    return '_c(' + node.tag + (node.children ? (',' + genChildren(node.children)) : '') + ')' 
  }

  function genChildren (children) {
    return Array.isArray(children)
      ? '[' + children.map(child => genNode(child)).join(',') + ']'
      : ''
  }

  console.log(genNode(vnode))

})();