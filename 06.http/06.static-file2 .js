var fs = require('fs');
var http = require('http');
var path = require('path');
var mime = {
	'.html': 'text/html',
	'.css': 'text/css',
	'.js': 'text/javascripte'
}
var server = http.createServer(function(req, res) {
	var url = req.url;
	console.log(url);
	res.setHeader('Content-Type', mime[path.extname(url)] + ';charset=utf8');
	// 这里的path用法回见五.11

	fs.readFile('.' + url, 'utf8', function(err, data){
		res.write(data);
		res.end();
	});
	// 这里要注意有两种情况还没考虑进来，一个是url为/的时候，另一个是扩展名为ico的时候，这时第一个必须加if (url == '/favicon.ico') {return res.end('404');} 判断，第二个的解决方式就要嘛加判断，要嘛找个该格式的放进去。

	// 其实这些功夫不用我们处理，有个模块干了这事。优化见下一页 07.static-file3.js
});
server.listen(8099,'127.0.0.1');
