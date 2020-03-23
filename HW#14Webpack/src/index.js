//it's my first try of realization of MVC pattern

//services
let apiBase = 'https://swapi.co/api';
let imageBase = 'https://starwars-visualguide.com/assets/img';
//./assets/img/characters/1.jpg

getId = (item) => {
	const idRegExp = /\/([0-9]*)\/$/;
	return item.match(idRegExp)[1];
};

const that = this;
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

let serrvice = {
	apiBase :'https://swapi.co/api',

	getResource : async function (url) {
		
		let config = {
			method: 'post',
			url: `${this.apiBase}${url}`,
			headers: {
    			'Access-Control-Allow-Origin': '*',
    			'Access-Control-Allow-Headers': '*',
    			'Access-Control-Allow-Methods': '*',
  			},
		}

		console.log('URRRl',`${this.apiBase}${url}`);


		const res = await axios.get(config);


		if (!res) {
			throw new Error(`Could not get ${url}` +
			`, received ${res.status}`)
		};
	//
	//return await res;
		return res;

	}
}

/*
  	getCharacterImg = async(id) =>{
  		const res = await this.getResource(`/characters/${id}.jpg/ `);
  		//await console.log(res)
  		return res;
  	}
*/
getCharacterImg = (id) => {
	return `${this._imageBase}/characters/${id}.jpg`
}


getSimpleRes = async (url) => {
	const res = await axios.get(url);
	if (!res) {
		throw new Error(`Could not get ${url}` +
			`, received ${res.status}`)
	};
	return res
}

//get specific Film
getFilm = async (id) => {
	const res = await this.getResource('/films/${id}/');
	//await console.log(res)
	return res;
}


getAllFilms = async () => {
	const res = await this.getResource('/films/');
	//await console.log(res)
	return res;
}


getAllEpisodes = async () => {
	const res = await this.getResource('/films/');
	//await console.log(res)
	//await res.data.results
	return res.data.results;
}

//?page=2
getPlanets = async () => {
	const res = await serrvice.getResource('/planets/?page=1');
	return res

};

generateId = () => `f${(+new Date).toString(16)}`;



/*---------------start view----------------*/
let view = {
	showPersons: function(someData, imgUrl) {
		//console.log('showPersons', someData);
		//let fullImageUrl = 
		//console.log('imgUrl', imgUrl)
		let {
			name,
			birth_year,
			gender
		} = someData.data;
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



		parent.innerHTML = markup;
		el.appendChild(parent);



		//make loader for 
		//get this image and put handler
		let image = document.getElementById(imgId);
		//console.log(imgId);
		//console.log(image);

		//i have no clue what im doing))
		setTimeout(() => {
			let downloadingImage = new Image();
			downloadingImage.onload = function() {
				image.src = this.src;
			};
			downloadingImage.src = imgUrl;
		}, 2000)


		//if(model.personsState){
		//	el.innerHTML ='';/////////////////////////////////////////////////////////////////////////////////	
		//}

	},
	flushContent: function(el) {
		//console.log('flush', el)
		el.innerHTML = '';
	},
	showPlanets: function({name,diameter}) {
		//console.log(data,'data from showplanetss')
		let el = document.getElementById("planets_container");

		let parent = document.createElement("div");

		parent.classList.add('col-sm-4');
		parent.classList.add('bg-dark');

		//<img class="card-img-top" src="Clear.gif"/>

		let markup = `<div class="card bg-dark">
      						<div class="card-body">
        						<h5 class="card-title">${name}</h5>
        						<p class="card-text">Diameter: ${diameter}</p>
      						</div>
    					</div>`;
		parent.innerHTML = markup;
		el.appendChild(parent);

	},
	removeElement: function(el) {

		el.parentNode.removeChild(el);
	},
	addElement: function(child) {
		let main = document.createElement("div");
		//parent.after(main);
		main.innerHTML = child;
		let container = document.getElementById('main_container');
		//console.log(container, 'cont')
	//	container.innerHTML += child;
	}


}
/*-----------------end view----------------*/



/*---------------start model---------------*/
let model = {
	number: 0,
	next: undefined,
	previous: undefined,
	personsState: false,
	planetState: false,
	getDataFilm: function(filmNum) {
		let arrOfCharacters = [];
		//console.log(getFilm(2));
		getFilm(filmNum).then((res) => {
			console.log('chars', res.data.characters);
			//getting id
			//console.log(getId(res.data.characters[0]));

			let arrOfIds = [];



			//arrOfIds[0]= getCharacterImg(getId(res.data.characters[0]));
			console.log('arrayOfIds', arrOfIds);

			//for every url

			//



			res.data.characters.forEach((el, index) => {
				arrOfIds[index] = getCharacterImg(getId(el))
			});



			//console.log(getSimpleRes(res.data.characters[0]));
			arrOfIds.forEach((el, index) => {
				getSimpleRes(res.data.characters[index]).then((res) => {
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
	getPlanetsData: function() {
		getPlanets().then((res) => {
			console.log('all planets', res);
			//seting next prev state from api
			this.next = res.data.next;
			this.prev = res.data.previous;
			//console.log('next-prev',this.next,this.prev);
			res.data.results.forEach((el)=>{
				view.showPlanets(el)
			})
		}).then(console.log('end'));

	},



};


/*-----------------end model---------------*/


/*---------------start controller---------------*/

let controller = {

	handleClick: function() {
		let container = document.getElementById("persons_container");
		controller.removeContent(container);

		console.log('btn clicked')	

		let filmInputValue = controller.getValue();
		model.getDataFilm(filmInputValue);
		//after request disable btn
		let el = document.getElementById('5_ep_data');
		el.disabled = true;
	},
	getValue: function() {
		let inputVal = document.getElementById('film-number').value;
		let parsVal = parseInt(inputVal);
		//console.log('parsedVAlue',parsVal);
		if(parsVal>=1 && parsVal<=7){
			return inputVal
		}else{
			console.log('Wrong film input!!!!!!!')
			return 2};
	},
	enableEl: function() {
		let btn = document.getElementById('5_ep_data');
		btn.disabled = false;
	},
	removeContent: function(el) {
	//	console.log('elinremove', el)
		view.flushContent(el);
	},
	generateMarkup: function(){

	}
	,

	handlePlanetsFind: function() {
	//	console.log('handlePlanetsFind')

		let container = document.getElementById('planets_container');
		//let btn = document.getElementById('get-planets');
		controller.removeContent(container);
		model.getPlanetsData();
		//view.removeElement(btn); //remove get planets btn
		//let markup = `<div class="btn-group my-2" role="group" aria-label="Basic example">
  		//						<button id="btn-prev" type="button" class="btn btn-secondary">Previous</button>
  		//					<button id="btn-next" type="button" class="btn btn-secondary">Next</button>
		//				</div>`;
		////adding prev and next btn
		//view.addElement(markup);
	},
	handleNext: function(){
		
		let container = document.getElementById('planets_container');
		controller.removeContent(container);
		if(typeof model.next==='string' && model.next !==null){
			//console.log('typeof next',typeof model.next);
			getSimpleRes(model.next).then((res)=>{
				console.log(res);
				model.next = res.data.next;
				model.previous = res.data.previous;
				res.data.results.forEach((el)=>{
					view.showPlanets(el)
				})
			});
		}
		//adding prev and next btn
		//view.addElement(markup);

	},
	handlePrevious: function(){
		
		let container = document.getElementById('planets_container');
		controller.removeContent(container);
		if(typeof model.previous==='string' && model.previous !==null){
			//console.log('typeof previous',typeof model.previous);
			getSimpleRes(model.previous).then((res)=>{
				console.log(res);
				model.next = res.data.next;
				model.previous = res.data.previous;
				res.data.results.forEach((el)=>{
					view.showPlanets(el)
				})
			});
		}
		//adding prev and previous btn
		//view.addElement(markup);

	},


};


/*-----------------end controller---------------*/


//init func
(function() {
	var app = {

		init: function() {

			model.personsState = false;




			this.main();
			this.evnt();
			this.onChngInVal();
			//this.getPlanetsEv();
			controller.handlePlanetsFind();
		},
		main: function() {
			//

			//get 5 episode of film
			//getFilm(5);

			///////////////////////////////
			document.getElementById("btn-next").addEventListener('click', function(){
				
				controller.handleNext();
			});
			document.getElementById("btn-prev").addEventListener('click', function(){
				
				controller.handlePrevious();
			});



			//let arrOfEpisodes = getAllEpisodes();
			//console.log('episodes', arrOfEpisodes)

		},
		evnt: function() {
			//here we register event handler
			let el = document.getElementById('5_ep_data');
			//console.log(el)
			el.onclick = controller.handleClick;
		},
		onChngInVal: function() {
			let el = document.getElementById('film-number');
			el.onchange = controller.enableEl;
		},
		getPlanetsEv: function() {
			//let el = document.getElementById('get-planets');
			//el.onclick = controller.handlePlanetsFind;

		}
	}

	app.init();


})();