const counterReducer = (state=Math.round( 10 - 0.5 + Math.random() * 441;), action){
    switch(action.type){
        case 'INCREMENT':
            return state+1
        case 'DECREMENT':
            return state-1
    }
}

export default counterReducer;