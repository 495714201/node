/**
 * 
 * @authors JianYule (495714201@qq.com)
 * @date      2016-12-20 11:06:39
 * @version $Id$
 */

var cheerio = require('cheerio');
var $ = cheerio.load('<h1 class="title">hello ll</h1>');
// 把字符串转成$对象，相当于jquery

$('.title').text('hello node.js');
$('.title').addClass('welcome');
console.log($.find('.welcome'));
console.log($.html());