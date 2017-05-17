module.exports = () =>{
	return new Promise((resolve, reject) => {
		setTimeout(()=>{
			console.log("我是1.js的逻辑")
			return resolve(1)
		},5000)	
	})
}