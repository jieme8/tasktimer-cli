module.exports = (task) => {
	task.map(d => {
		var taskFile= require(d.file);
		var taskAct = () => {
			setTimeout(() => {
				console.log("开始执行:" + d.name);
				console.time(d.name + "耗时：");
				taskFile().then(s=>{
					if(s == 1){
						console.log("执行结束:" + d.name);
						console.timeEnd(d.name + "耗时：")
					}else
						console.error(d.name + "执行错误");
					taskAct();
				});
			},d.time)
		}
		setTimeout(taskAct,d.time);
	})	
}

