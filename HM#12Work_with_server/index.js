//services
	_apiBase = 'https://swapi.co/api';
 	_imageBase = 'https://starwars-visualguide.com/assets/img';
	//./assets/img/characters/1.jpg
 	
 	getId = (item) => {
    	const idRegExp = /\/([0-9]*)\/$/;
    	return item.match(idRegExp)[1];
  	};


	getResource = async (url) => {
    	const res = await axios.get(`${this._apiBase}${url}`);

    	//console.log(`${this._apiBase}${url}`);

    	if (!res) {
     		throw new Error(`Could not get ${url}` +
        	`, received ${res.status}`)
    	};
    	//
    	//return await res;
  		return res;

  	};

/*
  	getCharacterImg = async(id) =>{
  		const res = await this.getResource(`/characters/${id}.jpg/ `);
  		//await console.log(res)
  		return res;
  	}
*/
	getCharacterImg = (id) =>{
		return `${this._imageBase}/characters/${id}.jpg`
	}


  	getSimpleRes = async(url) =>{
  		const res = await axios.get(url);
   		if (!res) {
     		throw new Error(`Could not get ${url}` +
        	`, received ${res.status}`)
    	};
    	return res
  	}

  	//get specific Film
  	getFilm = async (id) => {
  		const res = await this.getResource(`/films/${id}/ `);
  		//await console.log(res)
  		return res;
  	}


  	getAllFilms = async () => {
  		const res = await this.getResource(`/films/ `);
  		//await console.log(res)
  		return res;
  	}


  	getAllEpisodes = async () => {
  		const res = await this.getResource(`/films/ `);
  		//await console.log(res)
  		//await res.data.results
  		return res.data.results;
  	}


  	getAllPlanets = async () => {
    	const res = await this.getResource(`/people/`);
    	return res.results
      		.map(this._transformPerson)
      		.slice(0, 5);
  	};

  	generateId = () =>`f${(+new Date).toString(16)}`;



/*---------------start view----------------*/
	let view = {
		showPersons: function(someData, imgUrl){
			//console.log('showPersons', someData);
			//let fullImageUrl = 
			//console.log('imgUrl', imgUrl)
			let {name, birth_year, gender} =someData.data;
			//let shit = 'Test shit';
			let el = document.getElementById("persons_container");
			
			let parent = document.createElement("div");
			
			parent.classList.add('card');
			parent.classList.add('bg-secondary');

			let imgId = generateId();

			let markup = `<img class="card-img-top" src="Clear.gif" alt='${name} image' id='${imgId}'>
						<div class="card-body text-center" id="cardBody"> 
							<h4 class="card-title">${name}</h4>
							<p class="card-text">${birth_year}</p>
							<p class="card-text">${gender}</p>

						</div>`

			//console.log('state',model.personsState);



			parent.innerHTML =markup;
			el.appendChild(parent);

		

			//make loader for 
			//get this image and put handler
			let image = document.getElementById(imgId);
			//console.log(imgId);
			//console.log(image);

			//i have no clue what im doing))
			setTimeout(()=>{
				let downloadingImage = new Image();
				downloadingImage.onload = function(){
    				image.src = this.src;   
				};
				downloadingImage.src = imgUrl;
			},2000)


			//if(model.personsState){
			//	el.innerHTML ='';/////////////////////////////////////////////////////////////////////////////////	
			//}
			
		},
		flushContent:function(el){
			console.log('flush',el)
			el.innerHTML ='';
		},

/*		showCount = {
			var elCount = document.getElementById("area_game__user_count--total");
			elCount.innerHTML = count;
		}*/
	}
/*-----------------end view----------------*/



/*---------------start model---------------*/
	let model = {
		number:0 ,
		personsState: false,
		planetState: false,
		getData5Ep: function(filmNum){
			let arrOfCharacters = [];
			//console.log(getFilm(2));
			getFilm(filmNum).then((res)=>{
				console.log('chars',res.data.characters);
				//getting id
				//console.log(getId(res.data.characters[0]));

				let arrOfIds = [];

				res.data.characters.forEach((el,index)=>{
					arrOfIds[index] = getCharacterImg(getId(el))
				})

				//arrOfIds[0]= getCharacterImg(getId(res.data.characters[0]));
				console.log('arrayOfIds',arrOfIds);

				//for every url

				//

				//console.log(getSimpleRes(res.data.characters[0]));
				arrOfIds.forEach((el, index)=>{	
					getSimpleRes(res.data.characters[index]).then( (res)=>{
						view.showPersons(res, el);
						

						//if(arrOfIds.length-1 === index){
						//	model.personsState =true;
						//}

					})
				})
			});
			//this.number = x*y;
			//var result = this.number;
			//console.log(result)

			//view.showPersons(result)
		},
	
	};


/*-----------------end model---------------*/


/*---------------start controller---------------*/

	let controller = {
		handleClick:function(){
			let container = document.getElementById("persons_container");
			controller.removeContent(container);

		
			let filmInputValue = controller.getValue();
			model.getData5Ep(filmInputValue);
			//after request disable btn
			let el = document.getElementById('5_ep_data');
			el.disabled=true;
		},
		getValue:function(){
			return document.getElementById('film-number').value;
			//console.log('filmVal', getInputValue);
		},
		enableEl:function(){
			let btn = document.getElementById('5_ep_data');
			btn.disabled=false;
		},
		removeContent:function(el){
			console.log('elinremove',el)
			view.flushContent(el);
		}

	};


/*-----------------end controller---------------*/


//init func
(function(){
	var app ={

		init:function(){

			model.personsState = false;
			this.main();
			this.evnt();
			this.onChngInVal();

		},
		main: function(){
			//
		
			//get 5 episode of film
			//getFilm(5);


			let arrOfEpisodes = getAllEpisodes();
			console.log('episodes',arrOfEpisodes)

		},
		evnt: function(){
			//here we register event handler
			let el = document.getElementById('5_ep_data');
			el.onclick =controller.handleClick;
		},
		onChngInVal: function(){
			let el = document.getElementById('film-number');
			el.onchange = controller.enableEl;
		}
	}

	app.init();


})();


