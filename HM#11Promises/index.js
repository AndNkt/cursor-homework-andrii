
window.onload = function(){


	function getRandomChinese(num=1){
		return new Promise((resolve,reject)=>{

			if(typeof num !=='number' || num===0 || num%1>0){
				reject( new Error('Bad input data. Should be num(int) & GT than>0'));
			}else{

				let fstart = Date.now();
				//let mend = fstart+200;
				let fend;
				let symbol = '';
				let count = num;

				setTimeout(function run(){
					if(count===0){
						//fend = Date.now();
						//console.log('diff', fend-fstart);
						resolve(symbol);
					}
					else{
						//console.log(count);
						count--;
						symbol += String.fromCharCode(Date.now().toString().slice(-5));
						setTimeout(run, 49);
						//console.log('test',Date.now(),Date.now().toString().slice(-5));
					}
				},49);
			}
		})
	}

		getRandomChinese(4.6).then(console.log(data)).catch((e)=>console.log(e));
		getRandomChinese('avd').then((data)=>{console.log(data)}).catch((e)=>console.log(e));
		getRandomChinese(4).then((data)=>{console.log(data)}).catch((e)=>console.log(e));
	//( async()=>{
	//	await
	//})

	

}



