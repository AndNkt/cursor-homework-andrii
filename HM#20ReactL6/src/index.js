import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, combineReducers} from 'redux';

//STORE => GLOBAL STATE





//ACTION => INCREMENT

/////////////////////////////////////////////////////////
//REDUCERS setup

const DECREMENT = () =>{
	return {
		type: 'DECREMENT'
	}
}


const INCREMENT = () =>{
	return {
		type: 'INCREMENT'
	}
}

const ADDPOST = () =>{
	return {
		type: 'INCREMENT'
	}
}

/* 
const COUNTER = (state =0, action)=>{
	switch(action.type){
		case 'INCREMENT':
			return state + 1;
		case 'DECREMENT':
			return state - 1;
	}
}
 */
/* 
//creating store
let store = createStore(COUNTER);

//DISPLAY it in the console // subscribe on store changes
store.subscribe(()=> console.log(store.getState()));

//DISPATCH (for execute ACTION)
store.dispatch(INCREMENT());
 */
/////////////////////////////////////////////////////////






//REDUCER => CHECK WICH ACTION AND CHANGE STATE

//DISPATCH


ReactDOM.render(
	<React.StrictMode>
	  <App />
	</React.StrictMode>,
	document.getElementById('root')
  );
  