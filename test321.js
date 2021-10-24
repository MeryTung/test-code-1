;(function () {

  // js 基本数据类型：number、string、boolean、undefined、null
  // 基础数据类型的两个值，== 和 === 是一样的

  // ^_^ 虽然 null 是基本类型，但是 typeof null === 'object' ......

  console.log('undefined == undefined: ', undefined == undefined) // true
  console.log('undefined === undefined: ', undefined === undefined) // true

  console.log('null == null: ', null == null) // true
  console.log('null === null: ', null == null) // true

  console.log('NaN == NaN: ', NaN == NaN) // true
  console.log('NaN === NaN: ', NaN === NaN) // true

})();
