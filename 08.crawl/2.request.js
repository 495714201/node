/**
 * 
 * @authors JianYule (495714201@qq.com)
 * @date      2016-12-20 11:06:39
 * @version $Id$
 */

var request = require('request');
// 实现gbk到utf8的编码转换
var iconv = require('iconv-lite');
var cheerio = require('cheerio');
request({url:'http://top.baidu.com/category?c=10&fr=topindex', encoding:null}, function(err, res, body) {
	// 这里写成null，就是让服务器不要做转换，就让它为buffer出来，本来是应该写原网站里的gbk，就不会乱码，但是node不支持gbk。
	var result = iconv.decode(body,'gbk');
	// console.log(result);
	var $ = cheerio.load(result);
	$('.title a').each(function(item){
		console.log($(this).text());
	})
})