/*把src里的文件内容，写入到target文件里，写入时要先清空再写入*/
function copy(src, target) {
	var fs = require('fs');
	fs.readFile(src,function(err, data) {
		if(err){
			console.error(err);
		}else{
			fs.writeFile(target, data,  function(err){
				if(err){
					console.error(err);
				}
				console.log('over');
			})
		}
	});
}
copy('name.txt', 'name.bak.txt');
// http://www.zhufengpeixun.cn/course/25/learn#lesson/452            0：52：00