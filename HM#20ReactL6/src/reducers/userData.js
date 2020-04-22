

export const counterReducer = (state=10, action)=>{
    switch(action.type){
        case 'INCREMENT':
            state = state+action.payload;
            break; 
        case 'DECREMENT':
            return state-1
        default:
            return state
    }
    return state
}


const InitialState = {
    extraPost: []
  };


export const addedPost = (state=InitialState,action) =>{
    switch(action.type){
        case 'CHANGE_TEXT':

            return {
                ...state,
               extraPost:[
                   ...state.extraPost, action.payload
               ]
            } 

            break;
    }
    return {...state}
} 
    