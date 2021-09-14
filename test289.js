// 把 url 放到浏览器地址栏中试下，如果是正确的 URL 格式，浏览器会去解析 ip 地址（不管能否解析到）
// 如果不是正确的 url 格式，浏览器会用默认搜索引擎

// https://daringfireball.net/2010/07/improved_regex_for_matching_urls
;(function () {

  return

  const tbReg = /^((http|https):\/\/)?(([\w\-_])+\.)?(tmall|taobao)\.com/

  console.log(tbReg.test('taobao.com')) // true
  console.log(tbReg.test('www.taobao.com')) // true
  console.log(tbReg.test('m-1.taobao.com')) // true
  console.log(tbReg.test('https://m-1.taobao.com')) // true
  console.log(tbReg.test('http://m.taobao.com')) // true
  console.log(tbReg.test('http://m_2.taobao.com')) // true

})();

(function () {

  // 还不完善 ...
  const reg = /^(https?:\/\/)?(([A-Za-z0-9\-_]+)\.)+([A-Za-z]+)[/\?\:]?.*$/

  console.log(reg.test('http://1_.com')) // true
  console.log(reg.test('http://1-.com')) // true
  console.log(reg.test('http://1-1-2-3.com')) // true
  console.log(reg.test('https://1-1-2-3.com.')) // true
  console.log(reg.test('https://a.b.c.d.ip好')) // true
  console.log(reg.test('a.')) // false
  console.log(reg.test('a')) // false
  console.log(reg.test('a.com')) // true
  console.log(reg.test('a.你好')) // false
  console.log(reg.test('http://a.你好')) // false
  console.log(reg.test('http://a.com?a=1&b=2')) // true
  console.log(reg.test('http://a.com&a=1?b=2')) // true 有问题

})();