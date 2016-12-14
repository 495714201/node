var http = require('http');
var server = http.createServer(function(req, res) {
	res.write('hello world');
	res.write(new Buffer('hello,i am buffer'));
	// res.write 和 end参数只能是字符串或者buffer
	console.log('hello');
	res.end();
});
server.listen(8099,'127.0.0.1');
// 可以在浏览器里这样访问： http://127.0.0.1:8099/
// 也可以在终端这样访问：    curl '127.0.0.1:8099'  
// 要看更多信息可这样访问： curl -v '127.0.0.1:8099'  