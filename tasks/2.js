module.exports = () =>{
	return new Promise((resolve, reject) => {
		setTimeout(()=>{
			console.log("我是2.js的逻辑")
			return resolve(2)
		},15000)	
	})
}