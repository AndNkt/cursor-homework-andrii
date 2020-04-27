import React from 'react';

import { BrowserRouter as Router, Route} from 'react-router-dom';

//import Chat from './components/Chat/Chat.js';
import AnotherChat from './components/AnotherChat/AnotherChat.js';


/*import Join from './components/Join/Join.js';
import Chat from './components/Chat/Chat.js';
		<Route path="/chat" component={Chat} />
*/

const App = () => (
	<Router>
		<Route path="/" exact component={AnotherChat} />
	</Router>
);

export default App;