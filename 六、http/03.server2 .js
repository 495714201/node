var http = require('http');
var server = http.createServer(function(req, res) {

	// 设置响应头
	// 响应头要写在相应体前面
	// 如果不设置编码，如果文档用utf8，浏览器用gbk，那么浏览器显示就会乱码，设置了之后，就是告诉浏览器，按照我返回的编码格式渲染，就不会乱码了。
	res.setHeader('Content-Type', 'text/html;charset=utf8');
	// http://tool.oschina.net/commons  格式对照表 一目了然

	// res.end(new Date().toString());           // Thu Dec 15 2016 14:40:54 GMT+0800 (CST)
	console.log(new Date());                        // Thu Dec 15 2016 14:50:26 GMT+0800 (CST)
	res.end(new Date().toLocaleString());    // 12/15/2016, 2:43:36 PM
	// 首先调用每个数组元素的 toLocaleString() 方法，然后使用地区特定的分隔符把生成的字符串连接起来，形成一个字符串。
});
server.listen(8099,'127.0.0.1');
// 17：00