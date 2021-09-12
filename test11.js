module.exports = (function () {

  function type(value) {
    return Object.prototype.toString.call(value).replace(/\[\w+\s(\w+)\]/, ($0, $1) => {
      return $1
    })
  }

  function copyRegExp(value) {
    const reg = /\w*$/
    return new value.constructor(value.source, reg.exec(value))
  }

  function deepCopy(origin) {
    var target = Array.isArray(origin) ? [] : {}

    for (let key in origin) {
      if (!origin.hasOwnProperty(key)) {
        continue
      }
      let value = origin[key]
      const valueType = type(value)
      // 后续可以添加更多的类型
      if (valueType === 'Array' || valueType === 'Object') {
        target[key] = deepCopy(value)
      } else if (valueType === 'RegExp') {
        target[key] = copyRegExp(value)
      } else {
        target[key] = value
      }
    }

    return target
  }

  var person = {
    name: 'zhaoyiming',
    age: 18,
    skills: ['HTML', 'CSS', 'JavaScript'],
    reg: /abc/
  };
  var copiedPerson = deepCopy(person);
  copiedPerson.age = 20;
  copiedPerson.skills.push('NodeJs');
  copiedPerson.reg = /def/
  console.log('person: ', person);
  console.log('copiedPerson: ', copiedPerson);

  console.log('------------------');

  var arr = [1, 2, { count: 3 }];
  var copiedArr = deepCopy(arr);
  copiedArr[1] = 200;
  copiedArr[2].count = 300;
  console.log('arr: ', arr);
  console.log('copiedArr: ', copiedArr);

  return deepCopy

})();