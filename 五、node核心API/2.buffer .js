// 什么是Buffer
// 缓冲区Buffer是暂时存放输入输出数据的一段内存
// js语言自身只有字符串数据类型，没有二进制数据类型，而在处理TCP和文件流的时候，必须要处理二进制数据。
// Nodejs 提供了一个Buffer对象来提供对二进制数据的操作
// 是一个表示固定内存分配的全局对象，也就是说要放到缓存区中的字节数需要提前确定
// Buffer 好比由一个 八位字节 元素组成的数组，可以有效的在js中表示二进制数据


// 什么是字节
// 字节（Byte）是计算机存储时的一种计量单位，一个字节等于 8位 二进制数
// 一个位就代表一个0 或1，每8个位（bit）组成一个字节（Byte）
// 字节是通过网络传输信息的单位
// 一个字节最大值十进制是255  （00110101      2的八次方减1）
// ASCII 码使用指定的7位或8位二进制数组合来表示128或256种可能的字

// 定义Buffer
// new Buffer(size) 里面只能放字节 0-255
// Buffer 是全局对象，不需要引用，直接使用即可。


// 创建buffer的三种方法
//1.new Buffer()  指定大小
var buffer = new Buffer(2);
console.log(buffer);//<Buffer d0>会随机出来一个数 这个数是用十六进制来表示的。一直不懂他们之间的转换
buffer[0] = 10;
console.log(buffer);//<Buffer 0a>
buffer[1] = 16;
console.log(buffer);//<Buffer 0a 10>  十进制的16   表示为十六进制的10.

//2. 字符串创建
//一个汉字三个字节
console.log(new Buffer('🐖'));// <Buffer f0 9f 90 96>
console.log(new Buffer('猪'));// <Buffer e7 8c aa>

//3.数组创建
//new Buffer(array);
console.log(new Buffer([1,2,3]));//<Buffer 01 02 03>
//注意此处的数组跟js里的数组不一样，这里只是用来赋这几个值。
//数组里只能放数字，放十六进制、二进制、八进制等是可以的，只要是个数。不能放其他的，放了就不对了。

//注：buffer一旦创建，大小就不能改了


//字符串和Buffer转换
//Buffer转字符串 Buffer.toString([encoding],[start],[end])


