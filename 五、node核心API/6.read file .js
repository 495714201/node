// 读取文件
// 异步加载，参数里需要放入回调函数
var fs = require('fs');//fs是node亲生模块，所以不需要另行下载，直接引用即可。

fs.readFile('forRead.txt',function(err,data){
	if(err){
		console.log(err);//如果没有该文件，则会报错。err即是错误日志。
	}else{
		console.log("callBack1:" + data.toString());//将buffer转为字符串方法一，toString()
	}
});

//回调函数可以放里面也可以放外面
function callBcak(err, data) {
	console.log("callBack2:" + data);
	//这里也应该跟上面一样用if else。
}
fs.readFile('forRead.txt', 'utf8', callBcak);//将buffer转为字符串方法二,"utf8" or "utf-8" 都行

console.log(333);

//printlog：因为是异步的，所以333先打印出来了。
// 333   
// callBack1:The content is for read file.js.
// callBack2:The content is for read file.js.



// 同步读取文件
//不需要回调函数，通过函数返回值接收结果
var data = fs.readFileSync('forRead.txt', 'utf8');
console.log("同步读取文件：" + data);
console.log(444);
// printlog:
// 333
// 同步读取文件：The content is for read file.js.
// 444
// callBack1:The content is for read file.js.
// callBack2:The content is for read file.js.
// [Finished in 0.1s]

//http://www.zhufengpeixun.cn/course/25/learn#lesson/452      0：20：00
