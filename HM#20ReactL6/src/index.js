import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import allReducer from './reducers'

const myStore = createStore(allReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
	<React.StrictMode>
		<Provider store={myStore}>
			<App/>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
  );
  