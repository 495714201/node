var fs = require('fs');
var http = require('http');
var url = require('url');
var server = http.createServer(function(req, res) {
	res.setHeader('Content-Type', 'text/html;charset=utf8');
	// var url = req.url;
	// http://127.0.0.1:8099/index.html?a=1&b=2&c=3
	// url：/index.html?a=1&b=2&c=3

	var urlObj = url.parse(req.url);//url模块的一个方法，用来解析字符串
	console.log(urlObj);
	  /* Url {
	  protocol: null,
	  slashes: null,
	  auth: null,
	  host: null,
	  port: null,
	  hostname: null,
	  hash: null,
	  search: '?a=1&b=2&c=3',
	  query: 'a=1&b=2&c=3',
	  pathname: '/index.html',
	  path: '/index.html?a=1&b=2&c=3',
	  href: '/index.html?a=1&b=2&c=3' }*/

	var urlObj2 = url.parse(req.url, true);// 加上true是将解析出来的query字符串转化我对象格式
	console.log(urlObj2);
	// 注意如下的pathname和query
	/*Url {
	  protocol: null,
	  slashes: null,
	  auth: null,
	  host: null,
	  port: null,
	  hostname: null,
	  hash: null,
	  search: '?a=1&b=2&c=3',
	  query: { a: '1', b: '2', c: '3' },
	  pathname: '/index.html',
	  path: '/index.html?a=1&b=2&c=3',
	  href: '/index.html?a=1&b=2&c=3' }*/

	if (urlObj2.pathname === '/') {
		res.end('什么木有哦')
	} else if(urlObj2.pathname === '/apple') {
		res.end(urlObj2.query.a + '袋苹果🍎');
		// http://127.0.0.1:8099/apple?a=1&b=2&c=3
		// 1袋苹果🍎
	}

});
server.listen(8099,'127.0.0.1');


