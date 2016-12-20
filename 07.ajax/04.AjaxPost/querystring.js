// 新的模块 querystring
// 实现查询字符串和对象之间的互转
// 使用方法如下：
var querystring = require('querystring');
var s = 'name=zfpx&age=8';
console.log(querystring.parse(s));// { name: 'zfpx', age: '8' }
console.log(querystring.stringify(querystring.parse(s)));  // name=zfpx&age=8

