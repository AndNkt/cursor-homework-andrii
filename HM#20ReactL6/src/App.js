import React from 'react';
/* import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, like } from './actions'
 */

import ListPosts from './container/ListPosts';

import AddPost from './container/AddPost';

function App() {
/*   const counter = useSelector(state => state.counter);
  const isLogedIn = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
 */
  return (
    <div className="App">
 
      <AddPost/>
      <hr/>
      <ListPosts />

    </div>
  );
}

export default App;
