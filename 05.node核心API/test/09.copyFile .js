/*把src里的文件内容，写入到target文件里，写入时要先清空再写入*/
function copy(src, target) {
	var fs = require('fs');
	fs.readFile(src,function(err, data) {//注意这里最好不要加utf8，因为如果是图片或者其他格式，就读不出来了。不加的话就保持buffer类型。
		if(err){
			console.error(err);
		}else{
			fs.writeFile(target, data,  function(err) {
				if(err){
					console.error(err);
				}
				console.log('over');
			})
		}
	});
}
copy('img.jpg', 'img_copy.jpg');
// http://www.zhufengpeixun.cn/course/25/learn#lesson/452            0：52：00