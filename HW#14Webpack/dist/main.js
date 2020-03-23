/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//it's my first try of realization of MVC pattern\r\n\r\n//services\r\nlet apiBase = 'https://swapi.co/api';\r\nlet imageBase = 'https://starwars-visualguide.com/assets/img';\r\n//./assets/img/characters/1.jpg\r\n\r\ngetId = (item) => {\r\n\tconst idRegExp = /\\/([0-9]*)\\/$/;\r\n\treturn item.match(idRegExp)[1];\r\n};\r\n\r\nconst that = this;\r\ngetResource = async (url) => {\r\n\tconst res = await axios.get(`${this._apiBase}${url}`);\r\n\r\n\t//console.log(`${this._apiBase}${url}`);\r\n\r\n\tif (!res) {\r\n\t\tthrow new Error(`Could not get ${url}` +\r\n\t\t\t`, received ${res.status}`)\r\n\t};\r\n\t//\r\n\t//return await res;\r\n\treturn res;\r\n\r\n};\r\n\r\nlet serrvice = {\r\n\tapiBase :'https://swapi.co/api',\r\n\r\n\tgetResource : async function (url) {\r\n\t\t\r\n\t\tlet config = {\r\n\t\t\tmethod: 'post',\r\n\t\t\turl: `${this.apiBase}${url}`,\r\n\t\t\theaders: {\r\n    \t\t\t'Access-Control-Allow-Origin': '*',\r\n    \t\t\t'Access-Control-Allow-Headers': '*',\r\n    \t\t\t'Access-Control-Allow-Methods': '*',\r\n  \t\t\t},\r\n\t\t}\r\n\r\n\t\tconsole.log('URRRl',`${this.apiBase}${url}`);\r\n\r\n\r\n\t\tconst res = await axios.get(config);\r\n\r\n\r\n\t\tif (!res) {\r\n\t\t\tthrow new Error(`Could not get ${url}` +\r\n\t\t\t`, received ${res.status}`)\r\n\t\t};\r\n\t//\r\n\t//return await res;\r\n\t\treturn res;\r\n\r\n\t}\r\n}\r\n\r\n/*\r\n  \tgetCharacterImg = async(id) =>{\r\n  \t\tconst res = await this.getResource(`/characters/${id}.jpg/ `);\r\n  \t\t//await console.log(res)\r\n  \t\treturn res;\r\n  \t}\r\n*/\r\ngetCharacterImg = (id) => {\r\n\treturn `${this._imageBase}/characters/${id}.jpg`\r\n}\r\n\r\n\r\ngetSimpleRes = async (url) => {\r\n\tconst res = await axios.get(url);\r\n\tif (!res) {\r\n\t\tthrow new Error(`Could not get ${url}` +\r\n\t\t\t`, received ${res.status}`)\r\n\t};\r\n\treturn res\r\n}\r\n\r\n//get specific Film\r\ngetFilm = async (id) => {\r\n\tconst res = await this.getResource('/films/${id}/');\r\n\t//await console.log(res)\r\n\treturn res;\r\n}\r\n\r\n\r\ngetAllFilms = async () => {\r\n\tconst res = await this.getResource('/films/');\r\n\t//await console.log(res)\r\n\treturn res;\r\n}\r\n\r\n\r\ngetAllEpisodes = async () => {\r\n\tconst res = await this.getResource('/films/');\r\n\t//await console.log(res)\r\n\t//await res.data.results\r\n\treturn res.data.results;\r\n}\r\n\r\n//?page=2\r\ngetPlanets = async () => {\r\n\tconst res = await serrvice.getResource('/planets/?page=1');\r\n\treturn res\r\n\r\n};\r\n\r\ngenerateId = () => `f${(+new Date).toString(16)}`;\r\n\r\n\r\n\r\n/*---------------start view----------------*/\r\nlet view = {\r\n\tshowPersons: function(someData, imgUrl) {\r\n\t\t//console.log('showPersons', someData);\r\n\t\t//let fullImageUrl = \r\n\t\t//console.log('imgUrl', imgUrl)\r\n\t\tlet {\r\n\t\t\tname,\r\n\t\t\tbirth_year,\r\n\t\t\tgender\r\n\t\t} = someData.data;\r\n\t\t//let shit = 'Test shit';\r\n\t\tlet el = document.getElementById(\"persons_container\");\r\n\r\n\t\tlet parent = document.createElement(\"div\");\r\n\r\n\t\tparent.classList.add('card');\r\n\t\tparent.classList.add('bg-secondary');\r\n\r\n\t\tlet imgId = generateId();\r\n\r\n\t\tlet markup = `<img class=\"card-img-top\" src=\"Clear.gif\" alt='${name} image' id='${imgId}'>\r\n\t\t\t\t\t\t<div class=\"card-body text-center\" id=\"cardBody\"> \r\n\t\t\t\t\t\t\t<h4 class=\"card-title\">${name}</h4>\r\n\t\t\t\t\t\t\t<p class=\"card-text\">${birth_year}</p>\r\n\t\t\t\t\t\t\t<p class=\"card-text\">${gender}</p>\r\n\r\n\t\t\t\t\t\t</div>`\r\n\r\n\t\t//console.log('state',model.personsState);\r\n\r\n\r\n\r\n\t\tparent.innerHTML = markup;\r\n\t\tel.appendChild(parent);\r\n\r\n\r\n\r\n\t\t//make loader for \r\n\t\t//get this image and put handler\r\n\t\tlet image = document.getElementById(imgId);\r\n\t\t//console.log(imgId);\r\n\t\t//console.log(image);\r\n\r\n\t\t//i have no clue what im doing))\r\n\t\tsetTimeout(() => {\r\n\t\t\tlet downloadingImage = new Image();\r\n\t\t\tdownloadingImage.onload = function() {\r\n\t\t\t\timage.src = this.src;\r\n\t\t\t};\r\n\t\t\tdownloadingImage.src = imgUrl;\r\n\t\t}, 2000)\r\n\r\n\r\n\t\t//if(model.personsState){\r\n\t\t//\tel.innerHTML ='';/////////////////////////////////////////////////////////////////////////////////\t\r\n\t\t//}\r\n\r\n\t},\r\n\tflushContent: function(el) {\r\n\t\t//console.log('flush', el)\r\n\t\tel.innerHTML = '';\r\n\t},\r\n\tshowPlanets: function({name,diameter}) {\r\n\t\t//console.log(data,'data from showplanetss')\r\n\t\tlet el = document.getElementById(\"planets_container\");\r\n\r\n\t\tlet parent = document.createElement(\"div\");\r\n\r\n\t\tparent.classList.add('col-sm-4');\r\n\t\tparent.classList.add('bg-dark');\r\n\r\n\t\t//<img class=\"card-img-top\" src=\"Clear.gif\"/>\r\n\r\n\t\tlet markup = `<div class=\"card bg-dark\">\r\n      \t\t\t\t\t\t<div class=\"card-body\">\r\n        \t\t\t\t\t\t<h5 class=\"card-title\">${name}</h5>\r\n        \t\t\t\t\t\t<p class=\"card-text\">Diameter: ${diameter}</p>\r\n      \t\t\t\t\t\t</div>\r\n    \t\t\t\t\t</div>`;\r\n\t\tparent.innerHTML = markup;\r\n\t\tel.appendChild(parent);\r\n\r\n\t},\r\n\tremoveElement: function(el) {\r\n\r\n\t\tel.parentNode.removeChild(el);\r\n\t},\r\n\taddElement: function(child) {\r\n\t\tlet main = document.createElement(\"div\");\r\n\t\t//parent.after(main);\r\n\t\tmain.innerHTML = child;\r\n\t\tlet container = document.getElementById('main_container');\r\n\t\t//console.log(container, 'cont')\r\n\t//\tcontainer.innerHTML += child;\r\n\t}\r\n\r\n\r\n}\r\n/*-----------------end view----------------*/\r\n\r\n\r\n\r\n/*---------------start model---------------*/\r\nlet model = {\r\n\tnumber: 0,\r\n\tnext: undefined,\r\n\tprevious: undefined,\r\n\tpersonsState: false,\r\n\tplanetState: false,\r\n\tgetDataFilm: function(filmNum) {\r\n\t\tlet arrOfCharacters = [];\r\n\t\t//console.log(getFilm(2));\r\n\t\tgetFilm(filmNum).then((res) => {\r\n\t\t\tconsole.log('chars', res.data.characters);\r\n\t\t\t//getting id\r\n\t\t\t//console.log(getId(res.data.characters[0]));\r\n\r\n\t\t\tlet arrOfIds = [];\r\n\r\n\r\n\r\n\t\t\t//arrOfIds[0]= getCharacterImg(getId(res.data.characters[0]));\r\n\t\t\tconsole.log('arrayOfIds', arrOfIds);\r\n\r\n\t\t\t//for every url\r\n\r\n\t\t\t//\r\n\r\n\r\n\r\n\t\t\tres.data.characters.forEach((el, index) => {\r\n\t\t\t\tarrOfIds[index] = getCharacterImg(getId(el))\r\n\t\t\t});\r\n\r\n\r\n\r\n\t\t\t//console.log(getSimpleRes(res.data.characters[0]));\r\n\t\t\tarrOfIds.forEach((el, index) => {\r\n\t\t\t\tgetSimpleRes(res.data.characters[index]).then((res) => {\r\n\t\t\t\t\tview.showPersons(res, el);\r\n\r\n\r\n\t\t\t\t\t//if(arrOfIds.length-1 === index){\r\n\t\t\t\t\t//\tmodel.personsState =true;\r\n\t\t\t\t\t//}\r\n\r\n\t\t\t\t})\r\n\t\t\t})\r\n\r\n\t\t});\r\n\t\t//this.number = x*y;\r\n\t\t//var result = this.number;\r\n\t\t//console.log(result)\r\n\r\n\t\t//view.showPersons(result)\r\n\t},\r\n\tgetPlanetsData: function() {\r\n\t\tgetPlanets().then((res) => {\r\n\t\t\tconsole.log('all planets', res);\r\n\t\t\t//seting next prev state from api\r\n\t\t\tthis.next = res.data.next;\r\n\t\t\tthis.prev = res.data.previous;\r\n\t\t\t//console.log('next-prev',this.next,this.prev);\r\n\t\t\tres.data.results.forEach((el)=>{\r\n\t\t\t\tview.showPlanets(el)\r\n\t\t\t})\r\n\t\t}).then(console.log('end'));\r\n\r\n\t},\r\n\r\n\r\n\r\n};\r\n\r\n\r\n/*-----------------end model---------------*/\r\n\r\n\r\n/*---------------start controller---------------*/\r\n\r\nlet controller = {\r\n\r\n\thandleClick: function() {\r\n\t\tlet container = document.getElementById(\"persons_container\");\r\n\t\tcontroller.removeContent(container);\r\n\r\n\t\tconsole.log('btn clicked')\t\r\n\r\n\t\tlet filmInputValue = controller.getValue();\r\n\t\tmodel.getDataFilm(filmInputValue);\r\n\t\t//after request disable btn\r\n\t\tlet el = document.getElementById('5_ep_data');\r\n\t\tel.disabled = true;\r\n\t},\r\n\tgetValue: function() {\r\n\t\tlet inputVal = document.getElementById('film-number').value;\r\n\t\tlet parsVal = parseInt(inputVal);\r\n\t\t//console.log('parsedVAlue',parsVal);\r\n\t\tif(parsVal>=1 && parsVal<=7){\r\n\t\t\treturn inputVal\r\n\t\t}else{\r\n\t\t\tconsole.log('Wrong film input!!!!!!!')\r\n\t\t\treturn 2};\r\n\t},\r\n\tenableEl: function() {\r\n\t\tlet btn = document.getElementById('5_ep_data');\r\n\t\tbtn.disabled = false;\r\n\t},\r\n\tremoveContent: function(el) {\r\n\t//\tconsole.log('elinremove', el)\r\n\t\tview.flushContent(el);\r\n\t},\r\n\tgenerateMarkup: function(){\r\n\r\n\t}\r\n\t,\r\n\r\n\thandlePlanetsFind: function() {\r\n\t//\tconsole.log('handlePlanetsFind')\r\n\r\n\t\tlet container = document.getElementById('planets_container');\r\n\t\t//let btn = document.getElementById('get-planets');\r\n\t\tcontroller.removeContent(container);\r\n\t\tmodel.getPlanetsData();\r\n\t\t//view.removeElement(btn); //remove get planets btn\r\n\t\t//let markup = `<div class=\"btn-group my-2\" role=\"group\" aria-label=\"Basic example\">\r\n  \t\t//\t\t\t\t\t\t<button id=\"btn-prev\" type=\"button\" class=\"btn btn-secondary\">Previous</button>\r\n  \t\t//\t\t\t\t\t<button id=\"btn-next\" type=\"button\" class=\"btn btn-secondary\">Next</button>\r\n\t\t//\t\t\t\t</div>`;\r\n\t\t////adding prev and next btn\r\n\t\t//view.addElement(markup);\r\n\t},\r\n\thandleNext: function(){\r\n\t\t\r\n\t\tlet container = document.getElementById('planets_container');\r\n\t\tcontroller.removeContent(container);\r\n\t\tif(typeof model.next==='string' && model.next !==null){\r\n\t\t\t//console.log('typeof next',typeof model.next);\r\n\t\t\tgetSimpleRes(model.next).then((res)=>{\r\n\t\t\t\tconsole.log(res);\r\n\t\t\t\tmodel.next = res.data.next;\r\n\t\t\t\tmodel.previous = res.data.previous;\r\n\t\t\t\tres.data.results.forEach((el)=>{\r\n\t\t\t\t\tview.showPlanets(el)\r\n\t\t\t\t})\r\n\t\t\t});\r\n\t\t}\r\n\t\t//adding prev and next btn\r\n\t\t//view.addElement(markup);\r\n\r\n\t},\r\n\thandlePrevious: function(){\r\n\t\t\r\n\t\tlet container = document.getElementById('planets_container');\r\n\t\tcontroller.removeContent(container);\r\n\t\tif(typeof model.previous==='string' && model.previous !==null){\r\n\t\t\t//console.log('typeof previous',typeof model.previous);\r\n\t\t\tgetSimpleRes(model.previous).then((res)=>{\r\n\t\t\t\tconsole.log(res);\r\n\t\t\t\tmodel.next = res.data.next;\r\n\t\t\t\tmodel.previous = res.data.previous;\r\n\t\t\t\tres.data.results.forEach((el)=>{\r\n\t\t\t\t\tview.showPlanets(el)\r\n\t\t\t\t})\r\n\t\t\t});\r\n\t\t}\r\n\t\t//adding prev and previous btn\r\n\t\t//view.addElement(markup);\r\n\r\n\t},\r\n\r\n\r\n};\r\n\r\n\r\n/*-----------------end controller---------------*/\r\n\r\n\r\n//init func\r\n(function() {\r\n\tvar app = {\r\n\r\n\t\tinit: function() {\r\n\r\n\t\t\tmodel.personsState = false;\r\n\r\n\r\n\r\n\r\n\t\t\tthis.main();\r\n\t\t\tthis.evnt();\r\n\t\t\tthis.onChngInVal();\r\n\t\t\t//this.getPlanetsEv();\r\n\t\t\tcontroller.handlePlanetsFind();\r\n\t\t},\r\n\t\tmain: function() {\r\n\t\t\t//\r\n\r\n\t\t\t//get 5 episode of film\r\n\t\t\t//getFilm(5);\r\n\r\n\t\t\t///////////////////////////////\r\n\t\t\tdocument.getElementById(\"btn-next\").addEventListener('click', function(){\r\n\t\t\t\t\r\n\t\t\t\tcontroller.handleNext();\r\n\t\t\t});\r\n\t\t\tdocument.getElementById(\"btn-prev\").addEventListener('click', function(){\r\n\t\t\t\t\r\n\t\t\t\tcontroller.handlePrevious();\r\n\t\t\t});\r\n\r\n\r\n\r\n\t\t\t//let arrOfEpisodes = getAllEpisodes();\r\n\t\t\t//console.log('episodes', arrOfEpisodes)\r\n\r\n\t\t},\r\n\t\tevnt: function() {\r\n\t\t\t//here we register event handler\r\n\t\t\tlet el = document.getElementById('5_ep_data');\r\n\t\t\t//console.log(el)\r\n\t\t\tel.onclick = controller.handleClick;\r\n\t\t},\r\n\t\tonChngInVal: function() {\r\n\t\t\tlet el = document.getElementById('film-number');\r\n\t\t\tel.onchange = controller.enableEl;\r\n\t\t},\r\n\t\tgetPlanetsEv: function() {\r\n\t\t\t//let el = document.getElementById('get-planets');\r\n\t\t\t//el.onclick = controller.handlePlanetsFind;\r\n\r\n\t\t}\r\n\t}\r\n\r\n\tapp.init();\r\n\r\n\r\n})();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ 0:
/*!************************!*\
  !*** multi ./index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./index.js */\"./index.js\");\n\n\n//# sourceURL=webpack:///multi_./index.js?");

/***/ })

/******/ });