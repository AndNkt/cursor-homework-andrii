export const increment = (num) => {
    return{
        type: 'INCREMENT',
        payload: num
    }
}

export const decrement = () => {
    return{
        type: 'INCREMENT'
    }
}

export const like = (likesNum) => {
    return{
        type: 'ADD_LIKE',
        payload: likesNum
    }
}

export const selectUser = (user) =>{
    console.log('You clicked on user: ', user.first);
    return{
        type:'USER_SELECTED',
        payload:user
    }
}

export const updatePostText =  (posttext) => ({ type: "CHANGE_TEXT", payload: posttext});

export const updatePostImage = imageurl => ({ type: "CHANGE_IMAGE", payload: imageurl}); 

export const addPost = () => ({type:"ADD_POST"});
