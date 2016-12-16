var fs = require('fs');
var http = require('http');
var path = require('path');

var mime = require('mime');
// mime是第三方模块，所有需要本地安装才能用。
// mime.lookup('aaa.xxx')'
// 能得到文件xxx格式的文件类型，这个类型即是设置响应头Content-Type里的文件格式类型值。
// 如：mime.lookup('test.mp3)' => audio/mpeg
// 如：mime.lookup('index.html)' => text/html

var server = http.createServer(function(req, res) {
	var url = req.url;
	console.log(url);
	res.setHeader('Content-Type', mime.lookup(url) + ';charset=utf8');
	// 这里的path用法回见五.11
	console.log(path.extname(url));
	fs.readFile('.' + url, 'utf8', function(err, data){
		res.write(data);
		res.end('over');
	});
});
server.listen(8099,'127.0.0.1');


