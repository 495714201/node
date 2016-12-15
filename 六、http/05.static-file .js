var fs = require('fs');
var http = require('http');
var server = http.createServer(function(req, res) {
	var url = req.url;
	console.log(url);
	// 以下注意要做判断，如果不做判断，都用第一个if里的，那返回的就会只有html，而没有css
	if (url == '/') {
		res.setHeader('Content-Type', 'text/html;charset=utf8');
		fs.readFile('index.html', 'utf8', function(err, data){
			res.write(data);
			res.end();
		})
	} else if (url == '/index.css') {
		res.setHeader('Content-Type', 'text/css;charset=utf8');
		fs.readFile('index.css', 'utf8', function(err, data){
			res.write(data);
			res.end();
		})
	}
	// 这里只是做了两个判断，那如果有很多文件呢，所以，优化来了，见下一个文件 06.static-file2.js
});
server.listen(8099,'127.0.0.1');
