	let someObj = {'a':'clap', 's':'hihat', 'd':'kick', 'f': 'ride','g':'boom','h':'tom','j':'openhat','k':'snare','l':'tink'};

window.onload = function(){

	generateBlocks();

	document.addEventListener('keydown', (evnt)=>{ playMusic(evnt)});

	document.addEventListener('keyup', (evnt)=>{delSelect(evnt)});


	//adding listener to on click to div>span+kbd with attr [name]
	document.addEventListener('mousedown', (evnt)=>{
		//console.log('tag',event.target.tagName);

		//let selElement = event.target.tagName;

		if(evnt.target.getAttribute("name")){
			//console.log('key-', evnt.target.getAttribute("name"));
			let selectedKey = evnt.target.getAttribute("name");
			
			let selectAudio = document.querySelector(`audio[data-key=${selectedKey}]`);

			let selectedDiv=document.querySelector(`div[name=${selectedKey}]`);
			selectedDiv.classList.add('selected');
			
			selectAudio.currentTime = 0;
			selectAudio.play();
		}
		//console.log(evnt.target.getAttributeNames())
	});



	document.addEventListener('mouseup', (evnt)=>{
		let allDivs = document.querySelectorAll('div.row>div');
		//console.log(allDivs);
		//bad Practice!! remove selected class from all div's
		allDivs.forEach((el)=> el.classList.remove('selected'));
	});


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
		parent.innerHTML = `<kbd name="${key}">${key}</kbd>
							<span name="${key}">${val}</span>`;

		/*
		//BAD PRACTICE DON'T DO that at home!!!!!!!
		//another inefficient way, create element with event listener (just for study purpose)
		//adding event listener
		parent.addEventListener('mousedown', function(){
			let p = `${someObj[key]}.wav`
  			var music = new Audio(p);
  			music.play();
  			parent.classList.add('selected');
		});
		//remove selected class
		parent.addEventListener('mouseup', ()=>{
			parent.classList.remove('selected');
		})

		*/
							
		wrapper.appendChild(parent);

		//generate audio elements
		
		let audioEl = document.createElement("audio");
	 	
	 	//parent.classList.add('content');
		audioEl.setAttribute("data-key",`${key}`);
		audioEl.setAttribute("src",`${val}.wav`);
		wrapper.appendChild(audioEl);
	}	
}
	