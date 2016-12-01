//复制Buffer
console.log(111);
//Buffer.copy(targetBuffer, targetstart, sourcestart, sourceend);
const buf4 = new Buffer('乐乐1');
const buf5 = new Buffer('乐乐开心极了');

//var all = Buffer.copy(buf4, 0 ,0)
var buf7 = buf4.slice(6);
console.log(buf7.toString());//1

var buf8 = new Buffer(12);
buf5.copy(buf8, 0, 6, 12);//注意buf5是被复制的buffer
console.log(buf5); //<Buffer e4 b9 90 e4 b9 90 e5 bc 80 e5 bf 83 e6 9e 81 e4 ba 86>
console.log(buf8);                               //<Buffer e5 bc 80 e5 bf 83 00 00 00 00 00 00>  6-12只有6个字节，后边剩余的长度会用00来代替
console.log(buf8.toString());//开心

//homework
// 实现一个concat方法

// 获取字符串的长度
console.log(Buffer.byteLength('你猜我有几个字节呢'));//27