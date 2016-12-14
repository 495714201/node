/*
*  operate directiory
*/

var fs = require('fs');
// 1.创建目录
// make directory : mk dir
// The parent directory must be have, otherwise,will err.
/*fs.mkdir('test', function(err) {
	if (err) {
		console.log('directory create fail');
	} else {
		console.log('create suceess!')
	}
});*/

// if there has no parent directory,we can make one by ourselves.
// if  something that node can do, let it do ,otherwise, by ourselves.
 function makeDir(path, callback) {
 	// as a homeword to leave
 	// 1. 把这个参数转成数组
 	// 2. 依次判断各个目录是否存在，如果存在跳过，如果不存在，创建目录。
 	// 3. 最后创建一个最终的目录
 }

// 2.读取目录下的所有文件
// readdir
/*fs.readdir('./test', function(err, data) {
	console.log(data); //[ '09.copyFile .js' ]
})；*/

// 3.获取一个文件详情
fs.readdir('./test', function(err, files) {
	// 循环文件列表
	files.forEach(function(file) {
		// 获取文件详情
		fs.stat('./test/' + file, function(err, state) {
			console.log(state.isDirectory());//是否是目录
			console.log(state.isFile());//是否是文件
			console.log(state);
		})
	})
})
/*{ dev: 16777220,
  mode: 33188,
  nlink: 1,
  uid: 501,
  gid: 20,
  rdev: 0,
  blksize: 4096,
  ino: 2663410,
  size: 606,
  blocks: 8,
  atime: Wed Dec 14 2016 10:37:03 GMT+0800 (CST), //最后一次读取时间
  mtime: Wed Dec 14 2016 10:11:31 GMT+0800 (CST),//最后一个内容修改时间
  ctime: Wed Dec 14 2016 10:36:40 GMT+0800 (CST),//最后一个文件修改时间
  birthtime: Mon Dec 05 2016 14:33:37 GMT+0800 (CST) }//创建时间
*/

// 4.判断一个文件/文件夹是否存在
fs.exists('./test', function(exists) {
	console.log(exists);
})