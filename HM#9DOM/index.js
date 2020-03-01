
let randColor = () =>{
	//give rand num between 0 and 255
	 return Math.floor(Math.random() * 256) + 0
}


let aal =  document.body.querySelectorAll('.box');

function generateBlocks(){
	//create CSS style
	var style = document.createElement('style');
		style.type = 'text/css';
		style.innerHTML = 'div { float: left; }';
	document.getElementsByTagName('head')[0].appendChild(style);

	//creating div's
	for(let p=0; p<5;p++){
		let parent = document.createElement("div");
		parent.classList.add('content');
		document.body.appendChild(parent);
	}
	//select all divs
	let aal =  document.body.querySelectorAll('.content');
	
	//creating paragraphs
	aal.forEach(element =>{
		for(let i=0; i <5; i++){
			let p =document.createElement("p");
			//setting css style for each element
			p.style.cssText = `
			margin: 0;
			height: 50px;
			width: 50px;
			background-color: rgb(${randColor()},${randColor()},${randColor()})
			`;

			let content =document.body.querySelectorAll(".content")[i];

			content.append(p);
 
		}
	});

}


window.onload = function(){
	generateBlocks();
}

function generateBlocksInterval(){
	setInterval(()=>{
		//clears body 
		document.body.innerHTML=""
		generateBlocks();
	}, 1000);
}