

//it's my first try of realization of MVC pattern


	const apiBase ='https://swapi.co/api';
	const imageBase = 'https://starwars-visualguide.com/assets/img';

export	async function getResource(url) {

/*		
		let config = {
			method: 'get',
			url: `${apiBase}${url}`,
			headers: {
    			'Access-Control-Allow-Origin': '*',
    			'Access-Control-Allow-Headers': '*',
    			'Access-Control-Allow-Methods': '*',
  			},
		}*/

		//console.log('URL',`${apiBase}${url}`);


		//const res = await axios.get(config);

		const res = await axios.get(`${apiBase}${url}`);


		if (!res) {
			throw new Error(`Could not get ${url}` +
			`, received ${res.status}`)
		};
	//
	//return await res;
		return res;
	};

export	async function getSimpleRes(url){
	const res = await axios.get(url);
	if (!res) {
		throw new Error(`Could not get ${url}` +
			`, received ${res.status}`)
	};
	return res
	}


 export function getCharacterImg(id){
  		const res = `${imageBase}/characters/${id}.jpg`;
  		//await console.log(res)
  		return res;
  	}




//get specific Film
export async function getFilm(id){
	const res = await getResource(`/films/${id}/`);
	//await console.log(res)
	return res;
}


export async function getAllFilms(){
	const res = await getResource('/films/');
	//await console.log(res)
	return res;
}


export async function getAllEpisodes(){
	const res = await getResource('/films/');
	//await console.log(res)
	//await res.data.results
	return res.data.results;
}

//?page=2
export async function getPlanets(){
	const res = await getResource('/planets/?page=1');
	return res

};

