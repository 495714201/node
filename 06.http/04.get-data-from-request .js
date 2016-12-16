var http = require('http');
var server = http.createServer(function(req, res) {
	console.log(req.method);
	console.log(req.url);
	console.log(req.headers);

	// GET
	// /
	// { host: '127.0.0.1:8099',
	//   connection: 'keep-alive',
	//   'cache-control': 'max-age=0',
	//   'upgrade-insecure-requests': '1',
	//   'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.98 Safari/537.36',
	//   accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
	//   'accept-encoding': 'gzip, deflate, sdch, br',
	//   'accept-language': 'zh-CN,zh;q=0.8' }
	// GET
	// /favicon.ico
	// { host: '127.0.0.1:8099',
	//   connection: 'keep-alive',
	//   pragma: 'no-cache',
	//   'cache-control': 'no-cache',
	//   'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.98 Safari/537.36',
	//   accept: '*/*',
	//   referer: 'http://127.0.0.1:8099/',
	//   'accept-encoding': 'gzip, deflate, sdch, br',
	//   'accept-language': 'zh-CN,zh;q=0.8' }

	res.statusCode = 404; // 响应吗 
	res.setHeader('Content-Type', 'text/html;charset=utf8');
	// 注意响应头要写在相应体前面
	res.write('hello');          // 响应体  是一个服务端边发客户端边收的过程
	res.end('over');
});
server.listen(8099,'127.0.0.1');
