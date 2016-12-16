var fs = require('fs');
var path = require('path');
// 合并 链接路径
console.log(path.join('./test', '09.copyFile.js'));//test/09.copyFile.js
// 注：windows下是\ ， linux下是/。所以这里用join自动去识别，而不要自己用斜杠去拼接。
//要想知道路径分隔符用这个：
console.log(path.sep);  //  /

// 当前模块的绝对路径
console.log(__filename); //  /Users/jianfangjing/Desktop/node/五、node核心API/11. path .js

// 当前模块所在的绝对目录
console.log(__dirname); //  /Users/jianfangjing/Desktop/node/五、node核心API

// 基本文件名
console.log(path.basename(__filename, '.js'));  //  11. path

// 文件扩展名
console.log(path.extname(__filename));     //  .js

// 从一个相对路径解析为一个绝对路径
console.log(path.resolve());                                                        //   /Users/jianfangjing/Desktop/node/五、node核心API
console.log(path.resolve('test', '09.copyFile.js'));                        //   /Users/jianfangjing/Desktop/node/五、node核心API/test/09.copyFile.js
console.log(path.resolve('test', '09.copyFile.js', '..', 'test.txt'));    //   /Users/jianfangjing/Desktop/node/五、node核心API/test/test.txt