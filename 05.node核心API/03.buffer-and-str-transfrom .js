//字符串和Buffer转换

//字符串转Buffer
var buffer = new Buffer('乐乐', 'utf-8');
console.log(buffer);//<Buffer e4 b9 90 e4 b9 90>

//Buffer转字符串
//Buffer转字符串 Buffer.toString([encoding],[start],[end])
//buf.toString([encoding[, start[, end]]]); [ ] 表可选
console.log(buffer.toString('utf-8'));//"乐乐" 
console.log(buffer.toString('utf-8', 3, 6));//"乐" 注意此处是6  而不是5，如果是5的话，就会截取  e4 b9 两个字节，构不成一个汉字就会报错。
console.log(buffer.toString());//"乐乐" 不填编码默认是utf-8


