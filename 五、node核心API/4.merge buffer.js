const buf1 = new Buffer(10);
const buf2 = new Buffer(14);
const buf3 = new Buffer(18);
const totalLength = buf1.length + buf2.length + buf3.length;


console.log(totalLength);// Prints: 42
const bufA = Buffer.concat([buf1, buf2, buf3], totalLength);
console.log(bufA);// Prints: <Buffer 00 00 00 00 ...>
console.log(bufA.length);// Prints: 42

const buf4 = new Buffer('乐乐1');
const buf5 = new Buffer('乐乐2');
const buf6 = new Buffer('乐乐3');

console.log(Buffer.concat([buf4, buf5, buf6]));//<Buffer e4 b9 90 e4 b9 90 31 e4 b9 90 e4 b9 90 32 e4 b9 90 e4 b9 90 33> 后面不加长度也可以，会默认总长度
console.log(Buffer.concat([buf4, buf5, buf6], 21));//<Buffer e4 b9 90 e4 b9 90 31 e4 b9 90 e4 b9 90 32 e4 b9 90 e4 b9 90 33> 一个汉字三个字节，3*6=18，再加一个数字。
console.log(Buffer.concat([buf4, buf5, buf6], 21).toString());//乐乐1乐乐2乐乐3
