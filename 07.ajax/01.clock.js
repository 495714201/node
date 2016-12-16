var http = require('http');
var fs = require('fs');
var mime = require('mime');
var path = require('path');
//node亲生的模块，帮助我们解析请求中的URL的
var url = require('url');
var server = http.createServer(function(request,response){
   //把url转成url对象
    var urlObj = url.parse(request.url,true);

    //pathname 指的是路径名 问号和端口号中间的那一部分
    if(urlObj.pathname == '/'){
        response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
        fs.readFile('./clock.html',function(err,data){
            response.end(data);
        })
   }else if(urlObj.pathname == '/clock'){
        response.end(new Date().toLocaleString());
        response.statusCode = 404;
        response.end('404');
    }
});
//在8080端口上进行监听 ，主机名是localhost
// 0 - 65535
// ps -ef | grep node
server.listen(8099,'127.0.0.1');