在服务端，js文件都是延迟随机秒后返回。

在 async.html 中，标记 async 的脚本，不阻塞 DOM 解析，不会考虑执行顺序的问题，加载并解析完成后就立即执行。

在 defer.html 中，标记 defer 的脚本，不阻塞 DOM 解析，【肯定】会 【先于】 DOMContentLoaded 事件、【后于】普通脚本执行，并且是按 defer 脚本在文档中出现的位置顺序依次执行。

在 normal.html 中，证明 js 文件是可以并行下载的，但默认是按照脚本在文档中出现的位置顺序依次执行。

css 解析阻塞 dom 渲染，普通 js 文件加载阻塞 dom 解析。