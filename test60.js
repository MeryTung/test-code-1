; (function () {

  // test301.js

  function simpleNormalizeChildren(children) {
    for (var i = 0; i < children.length; i += 1) {
      if (Array.isArray(children[i])) {
        return [].concat.apply([], children)
      }
    }

    return children
  }

  console.log(simpleNormalizeChildren([1, 2, [3, 4, { name: 'zymfe' }, [5, 6]]]))


  

  function normalizeChildren(children) {
    var res = []

    for (var i = 0; i < children.length; i += 1) {
      var child = children[i]

      if (Array.isArray(child)) {
        res = res.concat(normalizeChildren(child))
      } else {
        res.push(child)
      }
    }

    return res
  }

  console.log(normalizeChildren([1, 2, 3, [4, 5, [6, 7, [8, 9, 10]]]]))
})();