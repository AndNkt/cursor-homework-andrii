/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/css-loader/dist/cjs.js!./styles/styles.css":
/*!******************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./styles/styles.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"../node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ./loading.gif */ \"./styles/loading.gif\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\n// Module\nexports.push([module.i, \"\\t\\timg.card-img-top{\\r\\n  \\t\\t\\twidth: 148px;\\r\\n  \\t\\t\\theight: 204px;\\r\\n  \\t\\t\\tbackground: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") 50% no-repeat;\\r\\n  \\t\\t\\tborder: 1px solid black;\\r\\n  \\t\\t\\tdisplay: block;\\r\\n    \\t\\tmargin-left: auto;\\r\\n    \\t\\tmargin-right: auto;\\r\\n    \\t\\t\\r\\n\\t\\t}\\r\\n\\r\\n\\t\\t.loader {\\r\\n  \\t\\t\\t\\t\\tborder: 16px solid #f3f3f3; /* Light grey */\\r\\n \\t\\t\\t\\t\\tborder-top: 16px solid #3498db; /* Blue */\\r\\n  \\t\\t\\t\\t\\tborder-radius: 50%;\\r\\n  \\t\\t\\t\\t\\twidth: 120px;\\r\\n  \\t\\t\\t\\t\\theight: 120px;\\r\\n  \\t\\t\\t\\t\\tanimation: spin 2s linear infinite;\\r\\n\\t\\t\\t\\t}\\r\\n\\r\\n\\t\\t@keyframes spin {\\r\\n\\t\\t  0% { transform: rotate(0deg); }\\r\\n\\t\\t  100% { transform: rotate(360deg); }\\r\\n\\t\\t}\\r\\n\\r\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./styles/styles.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.css */ \"./styles/styles.css\");\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_service_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/service.js */ \"./services/service.js\");\n//import axios from 'axios';\n //importing styles \n\n\n\nfunction generateId() {\n  return \"f\".concat((+new Date()).toString(16));\n}\n\nfunction getId(item) {\n  var idRegExp = /\\/([0-9]*)\\/$/; //console.log(item.match(idRegExp)[1])\n\n  return item.match(idRegExp)[1];\n}\n\n;\n/*---------------start view----------------*/\n\nvar view = {\n  showPersons: function showPersons(someData, imgUrl) {\n    //console.log('showPersons', someData);\n    //let fullImageUrl = \n    //console.log('imgUrl', imgUrl)\n    var _someData$data = someData.data,\n        name = _someData$data.name,\n        birth_year = _someData$data.birth_year,\n        gender = _someData$data.gender; //let shit = 'Test shit';\n\n    var el = document.getElementById(\"persons_container\");\n    var parent = document.createElement(\"div\");\n    parent.classList.add('card');\n    parent.classList.add('bg-secondary');\n    var imgId = generateId();\n    var markup = \"<img class=\\\"card-img-top\\\" src=\\\"Clear.gif\\\" alt='\".concat(name, \" image' id='\").concat(imgId, \"'>\\n\\t\\t\\t\\t\\t\\t<div class=\\\"card-body text-center\\\" id=\\\"cardBody\\\"> \\n\\t\\t\\t\\t\\t\\t\\t<h4 class=\\\"card-title\\\">\").concat(name, \"</h4>\\n\\t\\t\\t\\t\\t\\t\\t<p class=\\\"card-text\\\">\").concat(birth_year, \"</p>\\n\\t\\t\\t\\t\\t\\t\\t<p class=\\\"card-text\\\">\").concat(gender, \"</p>\\n\\n\\t\\t\\t\\t\\t\\t</div>\"); //console.log('state',model.personsState);\n\n    parent.innerHTML = markup;\n    el.appendChild(parent); //make loader for \n    //get this image and put handler\n\n    var image = document.getElementById(imgId); //console.log(imgId);\n    //console.log(image);\n    //i have no clue what im doing))\n\n    setTimeout(function () {\n      var downloadingImage = new Image();\n\n      downloadingImage.onload = function () {\n        image.src = this.src;\n      };\n\n      downloadingImage.src = imgUrl;\n    }, 2000); //if(model.personsState){\n    //\tel.innerHTML ='';/////////////////////////////////////////////////////////////////////////////////\t\n    //}\n  },\n  flushContent: function flushContent(el) {\n    //console.log('flush', el)\n    el.innerHTML = '';\n  },\n  showPlanets: function showPlanets(_ref) {\n    var name = _ref.name,\n        diameter = _ref.diameter;\n    //console.log(data,'data from showplanetss')\n    var el = document.getElementById(\"planets_container\");\n    var parent = document.createElement(\"div\");\n    parent.classList.add('col-sm-4');\n    parent.classList.add('bg-dark'); //<img class=\"card-img-top\" src=\"Clear.gif\"/>\n\n    var markup = \"<div class=\\\"card bg-dark\\\">\\n      \\t\\t\\t\\t\\t\\t<div class=\\\"card-body\\\">\\n        \\t\\t\\t\\t\\t\\t<h5 class=\\\"card-title\\\">\".concat(name, \"</h5>\\n        \\t\\t\\t\\t\\t\\t<p class=\\\"card-text\\\">Diameter: \").concat(diameter, \"</p>\\n      \\t\\t\\t\\t\\t\\t</div>\\n    \\t\\t\\t\\t\\t</div>\");\n    parent.innerHTML = markup;\n    el.appendChild(parent);\n  },\n  removeElement: function removeElement(el) {\n    el.parentNode.removeChild(el);\n  },\n  addElement: function addElement(child) {\n    var main = document.createElement(\"div\"); //parent.after(main);\n\n    main.innerHTML = child;\n    var container = document.getElementById('main_container'); //console.log(container, 'cont')\n    //\tcontainer.innerHTML += child;\n  }\n};\n/*-----------------end view----------------*/\n\n/*---------------start model---------------*/\n\nvar model = {\n  number: 0,\n  next: undefined,\n  previous: undefined,\n  personsState: false,\n  planetState: false,\n  getDataFilm: function getDataFilm(filmNum) {\n    var arrOfCharacters = []; //console.log(getFilm(2));\n\n    Object(_services_service_js__WEBPACK_IMPORTED_MODULE_1__[\"getFilm\"])(filmNum).then(function (res) {\n      console.log('chars', res.data.characters); //getting id\n      //console.log(getId(res.data.characters[0]));\n\n      var arrOfIds = []; //arrOfIds[0]= getCharacterImg(getId(res.data.characters[0]));\n\n      console.log('arrayOfIds', arrOfIds); //for every url\n      //\n\n      res.data.characters.forEach(function (el, index) {\n        arrOfIds[index] = Object(_services_service_js__WEBPACK_IMPORTED_MODULE_1__[\"getCharacterImg\"])(getId(el)); //console.log('el',getId(el));\n      }); //console.log('arrofids',arrOfIds);\n      //console.log(getSimpleRes(res.data.characters[0]));\n\n      arrOfIds.forEach(function (el, index) {\n        Object(_services_service_js__WEBPACK_IMPORTED_MODULE_1__[\"getSimpleRes\"])(res.data.characters[index]).then(function (res) {\n          view.showPersons(res, el); //if(arrOfIds.length-1 === index){\n          //\tmodel.personsState =true;\n          //}\n        });\n      });\n    }); //this.number = x*y;\n    //var result = this.number;\n    //console.log(result)\n    //view.showPersons(result)\n  },\n  getPlanetsData: function getPlanetsData() {\n    var _this = this;\n\n    Object(_services_service_js__WEBPACK_IMPORTED_MODULE_1__[\"getPlanets\"])().then(function (res) {\n      console.log('all planets', res); //seting next prev state from api\n\n      _this.next = res.data.next;\n      _this.prev = res.data.previous; //console.log('next-prev',this.next,this.prev);\n\n      res.data.results.forEach(function (el) {\n        view.showPlanets(el);\n      });\n    }).then(console.log('Planets Loaded'));\n  }\n};\n/*-----------------end model---------------*/\n\n/*---------------start controller---------------*/\n\nvar controller = {\n  handleClick: function handleClick() {\n    var container = document.getElementById(\"persons_container\");\n    controller.removeContent(container);\n    console.log('btn clicked');\n    var filmInputValue = controller.getValue();\n    model.getDataFilm(filmInputValue); //after request disable btn\n\n    var el = document.getElementById('5_ep_data');\n    el.disabled = true;\n  },\n  getValue: function getValue() {\n    var inputVal = document.getElementById('film-number').value;\n    var parsVal = parseInt(inputVal); //console.log('parsedVAlue',parsVal);\n\n    if (parsVal >= 1 && parsVal <= 7) {\n      return inputVal;\n    } else {\n      console.log('Wrong film input!!!!!!!');\n      return 2;\n    }\n\n    ;\n  },\n  enableEl: function enableEl() {\n    var btn = document.getElementById('5_ep_data');\n    btn.disabled = false;\n  },\n  removeContent: function removeContent(el) {\n    //\tconsole.log('elinremove', el)\n    view.flushContent(el);\n  },\n  generateMarkup: function generateMarkup() {},\n  handlePlanetsFind: function handlePlanetsFind() {\n    //\tconsole.log('handlePlanetsFind')\n    var container = document.getElementById('planets_container'); //let btn = document.getElementById('get-planets');\n\n    controller.removeContent(container);\n    model.getPlanetsData(); //view.removeElement(btn); //remove get planets btn\n    //let markup = `<div class=\"btn-group my-2\" role=\"group\" aria-label=\"Basic example\">\n    //\t\t\t\t\t\t<button id=\"btn-prev\" type=\"button\" class=\"btn btn-secondary\">Previous</button>\n    //\t\t\t\t\t<button id=\"btn-next\" type=\"button\" class=\"btn btn-secondary\">Next</button>\n    //\t\t\t\t</div>`;\n    ////adding prev and next btn\n    //view.addElement(markup);\n  },\n  handleNext: function handleNext() {\n    var container = document.getElementById('planets_container');\n    controller.removeContent(container);\n\n    if (typeof model.next === 'string' && model.next !== null) {\n      //console.log('typeof next',typeof model.next);\n      Object(_services_service_js__WEBPACK_IMPORTED_MODULE_1__[\"getSimpleRes\"])(model.next).then(function (res) {\n        console.log(res);\n        model.next = res.data.next;\n        model.previous = res.data.previous;\n        res.data.results.forEach(function (el) {\n          view.showPlanets(el);\n        });\n      });\n    } //adding prev and next btn\n    //view.addElement(markup);\n\n  },\n  handlePrevious: function handlePrevious() {\n    var container = document.getElementById('planets_container');\n    controller.removeContent(container);\n\n    if (typeof model.previous === 'string' && model.previous !== null) {\n      //console.log('typeof previous',typeof model.previous);\n      Object(_services_service_js__WEBPACK_IMPORTED_MODULE_1__[\"getSimpleRes\"])(model.previous).then(function (res) {\n        console.log(res);\n        model.next = res.data.next;\n        model.previous = res.data.previous;\n        res.data.results.forEach(function (el) {\n          view.showPlanets(el);\n        });\n      });\n    } //adding prev and previous btn\n    //view.addElement(markup);\n\n  }\n};\n/*-----------------end controller---------------*/\n//init func\n\n(function () {\n  var app = {\n    init: function init() {\n      model.personsState = false;\n      this.main();\n      this.evnt();\n      this.onChngInVal(); //this.getPlanetsEv();\n\n      controller.handlePlanetsFind();\n    },\n    main: function main() {\n      //\n      //get 5 episode of film\n      //getFilm(5);\n      ///////////////////////////////\n      document.getElementById(\"btn-next\").addEventListener('click', function () {\n        controller.handleNext();\n      });\n      document.getElementById(\"btn-prev\").addEventListener('click', function () {\n        controller.handlePrevious();\n      }); //let arrOfEpisodes = getAllEpisodes();\n      //console.log('episodes', arrOfEpisodes)\n    },\n    evnt: function evnt() {\n      //here we register event handler\n      var el = document.getElementById('5_ep_data'); //console.log(el)\n\n      el.onclick = controller.handleClick;\n    },\n    onChngInVal: function onChngInVal() {\n      var el = document.getElementById('film-number');\n      el.onchange = controller.enableEl;\n    },\n    getPlanetsEv: function getPlanetsEv() {//let el = document.getElementById('get-planets');\n      //el.onclick = controller.handlePlanetsFind;\n    }\n  };\n  app.init();\n})();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./services/service.js":
/*!*****************************!*\
  !*** ./services/service.js ***!
  \*****************************/
/*! exports provided: getResource, getSimpleRes, getCharacterImg, getFilm, getAllFilms, getAllEpisodes, getPlanets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getResource\", function() { return getResource; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getSimpleRes\", function() { return getSimpleRes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCharacterImg\", function() { return getCharacterImg; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFilm\", function() { return getFilm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllFilms\", function() { return getAllFilms; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllEpisodes\", function() { return getAllEpisodes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPlanets\", function() { return getPlanets; });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n//it's my first try of realization of MVC pattern\nvar apiBase = 'https://swapi.co/api';\nvar imageBase = 'https://starwars-visualguide.com/assets/img';\nfunction getResource(_x) {\n  return _getResource.apply(this, arguments);\n}\n\nfunction _getResource() {\n  _getResource = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url) {\n    var res;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return axios.get(\"\".concat(apiBase).concat(url));\n\n          case 2:\n            res = _context.sent;\n\n            if (res) {\n              _context.next = 5;\n              break;\n            }\n\n            throw new Error(\"Could not get \".concat(url) + \", received \".concat(res.status));\n\n          case 5:\n            ; //\n            //return await res;\n\n            return _context.abrupt(\"return\", res);\n\n          case 7:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _getResource.apply(this, arguments);\n}\n\n;\nfunction getSimpleRes(_x2) {\n  return _getSimpleRes.apply(this, arguments);\n}\n\nfunction _getSimpleRes() {\n  _getSimpleRes = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url) {\n    var res;\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return axios.get(url);\n\n          case 2:\n            res = _context2.sent;\n\n            if (res) {\n              _context2.next = 5;\n              break;\n            }\n\n            throw new Error(\"Could not get \".concat(url) + \", received \".concat(res.status));\n\n          case 5:\n            ;\n            return _context2.abrupt(\"return\", res);\n\n          case 7:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n  return _getSimpleRes.apply(this, arguments);\n}\n\nfunction getCharacterImg(id) {\n  var res = \"\".concat(imageBase, \"/characters/\").concat(id, \".jpg\"); //await console.log(res)\n\n  return res;\n} //get specific Film\n\nfunction getFilm(_x3) {\n  return _getFilm.apply(this, arguments);\n}\n\nfunction _getFilm() {\n  _getFilm = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(id) {\n    var res;\n    return regeneratorRuntime.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            _context3.next = 2;\n            return getResource(\"/films/\".concat(id, \"/\"));\n\n          case 2:\n            res = _context3.sent;\n            return _context3.abrupt(\"return\", res);\n\n          case 4:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3);\n  }));\n  return _getFilm.apply(this, arguments);\n}\n\nfunction getAllFilms() {\n  return _getAllFilms.apply(this, arguments);\n}\n\nfunction _getAllFilms() {\n  _getAllFilms = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {\n    var res;\n    return regeneratorRuntime.wrap(function _callee4$(_context4) {\n      while (1) {\n        switch (_context4.prev = _context4.next) {\n          case 0:\n            _context4.next = 2;\n            return getResource('/films/');\n\n          case 2:\n            res = _context4.sent;\n            return _context4.abrupt(\"return\", res);\n\n          case 4:\n          case \"end\":\n            return _context4.stop();\n        }\n      }\n    }, _callee4);\n  }));\n  return _getAllFilms.apply(this, arguments);\n}\n\nfunction getAllEpisodes() {\n  return _getAllEpisodes.apply(this, arguments);\n} //?page=2\n\nfunction _getAllEpisodes() {\n  _getAllEpisodes = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {\n    var res;\n    return regeneratorRuntime.wrap(function _callee5$(_context5) {\n      while (1) {\n        switch (_context5.prev = _context5.next) {\n          case 0:\n            _context5.next = 2;\n            return getResource('/films/');\n\n          case 2:\n            res = _context5.sent;\n            return _context5.abrupt(\"return\", res.data.results);\n\n          case 4:\n          case \"end\":\n            return _context5.stop();\n        }\n      }\n    }, _callee5);\n  }));\n  return _getAllEpisodes.apply(this, arguments);\n}\n\nfunction getPlanets() {\n  return _getPlanets.apply(this, arguments);\n}\n\nfunction _getPlanets() {\n  _getPlanets = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {\n    var res;\n    return regeneratorRuntime.wrap(function _callee6$(_context6) {\n      while (1) {\n        switch (_context6.prev = _context6.next) {\n          case 0:\n            _context6.next = 2;\n            return getResource('/planets/?page=1');\n\n          case 2:\n            res = _context6.sent;\n            return _context6.abrupt(\"return\", res);\n\n          case 4:\n          case \"end\":\n            return _context6.stop();\n        }\n      }\n    }, _callee6);\n  }));\n  return _getPlanets.apply(this, arguments);\n}\n\n;\n\n//# sourceURL=webpack:///./services/service.js?");

/***/ }),

/***/ "./styles/loading.gif":
/*!****************************!*\
  !*** ./styles/loading.gif ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"a796532cb4f3f0da9bb5649f3fbf383d.gif\");\n\n//# sourceURL=webpack:///./styles/loading.gif?");

/***/ }),

/***/ "./styles/styles.css":
/*!***************************!*\
  !*** ./styles/styles.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"../node_modules/css-loader/dist/cjs.js!./styles/styles.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./styles/styles.css?");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi @babel/polyfill ./index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! @babel/polyfill */\"../node_modules/@babel/polyfill/lib/index.js\");\nmodule.exports = __webpack_require__(/*! ./index.js */\"./index.js\");\n\n\n//# sourceURL=webpack:///multi_@babel/polyfill_./index.js?");

/***/ })

/******/ });