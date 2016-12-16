var http = require('http');
var fs = require('fs');
var mime = require('mime');
var path = require('path');
var url = require('url');
var users = [];
var server = http.createServer(function(request,response){
   //把url转成url对象
    var urlObj = url.parse(request.url,true);
    //pathname 指的是路径名 问号和端口号中间的那一部分
    if(urlObj.pathname == '/'){
        response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
        fs.readFile('./reg.html',function(err,data){
            response.end(data);
        })
   }else if(urlObj.pathname == '/reg'){
        //每当服务器收到客户端发过来的一段数据的时候就会触发data事件
       var str = '';
        request.on('data',function(data){
            str+=data.toString();
       });
        //当所有的数据全部接收完毕的时候会会触发end事件，这时请求体的数据就接收完整了
        request.on('end',function(){
            response.end(str);
            //转成对象追加到用户列表里
            users.push(JSON.parse(str));
            //最后返回用户列表
            console.log(typeof str);
        })
    }
});
//在8080端口上进行监听 ，主机名是localhost
// 0 - 65535
// ps -ef | grep node
server.listen(8099,'127.0.0.1');