


import Posts from './Posts'
//import updatePostImage from './userData';

import {addedPost} from './userData';
//import addPost from './userData';




import {combineReducers} from 'redux'

const allReducers = combineReducers({
    Posts,
    addedPost,
    //  updatePostImage,
    //addPost
}); 



export default allReducers;