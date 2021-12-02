(function () {
  // mock vue router data struct

  const routes = [
    {
      path: "/",
      component: "App.page",
    },
    {
      path: "/home",
      component: "Home.page",
      children: [
        {
          path: "top",
          component: "HomeTop.page",
          children: [
            {
              path: "/top-center",
              component: "HomeTopCenter.page",
            },
          ],
        },
      ],
    },
    {
      path: "/list",
      component: "List.page",
    },
  ]

  function normalizePath(path) {
    return path.replace(/\/$/, "")
  }

  function normalizeChildPath(path) {
    // 如果不是一级目录，就把第一个字符 / 去掉
    if (path.charAt(0) === "/") {
      return path.slice(1)
    }
    return path
  }

  function createMatcher(routes, matcher = {}, parent) {
    routes.forEach((route) => {
      const record = {
        path: normalizePath(route.path),
        component: route.component,
      }
      if (parent) {
        record.path = `${parent.path}/${normalizeChildPath(route.path)}`
      }
      matcher[record.path] = record
      if (route.children) {
        return createMatcher(route.children, matcher, record)
      }
    });
    return matcher
  }

  console.log(createMatcher(routes))
})();
