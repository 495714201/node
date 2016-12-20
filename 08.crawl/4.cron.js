/**
 * 
 * @authors JianYule (495714201@qq.com)
 * @date      2016-12-20 11:06:39
 * @version $Id$
 */

var CronJob = require('cron').CronJob;
// 用来周期性的执行某种任务或等待处理某些事件的一个守护进程
var job = new CronJob('1 * * * * *', function() {
	console.log('每分钟执行一次');
});
job.start();