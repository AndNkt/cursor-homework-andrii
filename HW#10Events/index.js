	let someObj = {'a':'clap', 's':'hihat', 'd':'kick', 'f': 'ride','g':'boom','h':'tom','j':'openhat','k':'snare','l':'tink'};

window.onload = function(){


	document.addEventListener('keydown', (evnt)=>{ playMusic(evnt)});

	document.addEventListener('keyup', (evnt)=>{delSelect(evnt)});



	generateBlocks();


	function delSelect(evnt){
		//get btn unpressed 
		let btnKey = evnt.code.replace('Key','').toLowerCase();
		let selectedDiv=document.querySelector(`div[name=${btnKey}]`);
		//console.log(selectedDiv.className);
		selectedDiv.className =	selectedDiv.className.replace(' selected','');
	}

	function playMusic( evnt ){
		
		//console.log('key=',evnt.code.replace('Key','').toLowerCase());
		
		//get btn pressed 
		let btnKey = evnt.code.replace('Key','').toLowerCase();

		let selectAudio=document.querySelector(`audio[data-key=${btnKey}]`);

		let selectedDiv=document.querySelector(`div[name=${btnKey}]`);

		//console.log(selectAudio);
		selectAudio.currentTime = 0;
		selectAudio.play();

		//console.log(evnt);

		selectedDiv.className += ' selected'

		//get music val obj
		//console.log(someObj[btnKey]);


		//let p = `${someObj[btnKey]}.wav`
  		//var music = new Audio(p);
  		//music.play();
  	}
}


function generateBlocks(){

	////////////////////////////////////////////////////////////////////////////////////
	
	//generate div element with kbd
	for(let [key,val] of Object.entries(someObj) ){
		let wrapper = document.querySelector('.row');

		//generate div>kbd+span elements
		
		let parent = document.createElement("div");
	 	parent.classList.add('col-sm');
	 	parent.classList.add('mx-1');
		parent.setAttribute("name",`${key}`);
		parent.innerHTML = `<kbd>${key}</kbd>
							<span>${val}</span>`;
		wrapper.appendChild(parent);

		//generate audio elements
		
		let audioEl = document.createElement("audio");
	 	
	 	//parent.classList.add('content');
		audioEl.setAttribute("data-key",`${key}`);
		audioEl.setAttribute("src",`${val}.wav`);
		wrapper.appendChild(audioEl);
	}	
}
	