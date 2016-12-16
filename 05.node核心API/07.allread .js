var fs = require('fs');
// var name = fs.readFileSync('name.txt','utf8');
// var age = fs.readFileSync('age.txt','utf8');
// console.log(name,age);

// 把几个文件读取出来的内容同时输出，有如下方法：
// 一、回调函数嵌套多个异步操作完成之后执行的回调
// 1.需要的时间长，m+n
// 2.代码可读性非常差
/*fs.readFile('name.txt', 'utf8', function(err, data){
	if(err){

	}else{
		fs.readFile('age.txt', 'utf8', function(err, data2){
			if(err){

			}else{
				console.log(data, data2);
			}
		})
	}
})*/
 // 二、计数器
 // 方法一
/* var person = {};
 function show(){
 	if(Object.keys(person).length === 2){
 	//对Object.keys 的解释此页很详细：https://msdn.microsoft.com/library/ff688127(v=vs.94).aspx
 		console.log(person);
 	}
 }
fs.readFile('age.txt', 'utf8', function(err, name){
	person.name = name;
	show ();
})
fs.readFile('age.txt', 'utf8', function(err, age){
	person.age = age;
	show ();
})*/

//计数器
// 方法二  因为Object.keys方法不支持ie678，所以pc端还是用这个方法比较好。
 var person = {};
 var num = 0;
 function show(){
 	if(num === 2){
 	//对Object.keys 的解释此页很详细：https://msdn.microsoft.com/library/ff688127(v=vs.94).aspx
 		console.log(person);
 	}
 }
fs.readFile('age.txt', 'utf8', function(err, name){
	person.name = name;
	num ++;
	show ();
})
fs.readFile('age.txt', 'utf8', function(err, age){
	person.age = age;
	num ++;
	show ();
})
// 三、promise
// 后面再详细记录
// 四、基于事件
// 后面再详细记录
