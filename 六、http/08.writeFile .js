var fs = require('fs');
// fs.writeFileSync('writeContent.txt', 'i am the write content in sync');

/*fs.writeFile('writeContent.txt', 'i am the write content3', 'utf8', function(err){
	// 注意，写文件回调里只有一个参数err，没有参数data，注意区别去读取文件的参数（err， data）
	if(err) {

	}else{
		console.log('over')
	}
})*/
// flag 表对此文件做何种类型的操作  
// 默认w。w：清空并写入   q:在原有基础上追加
fs.writeFile('writeContent.txt', 'i am the write content6',{flag:'a'},function(err){
	// 注意，写文件回调里只有一个参数err，没有参数data，注意区别去读取文件的参数（err， data）
	if(err) {

	}else{
		console.log('over')
	}
});
// 上面的a 等同于下面的这个方法，专为追加而生的API: appdenFile
fs.appendFile('writeContent.txt', ' node2');