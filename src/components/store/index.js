import { createStore } from "redux";


const counterReducer = (state={counter:0}, action) => {
if(action.type === 'increment'){
    return { counter : state.counter + 5};
}
if(action.type === 'decrement'){
    return { counter : state.counter - 5};
}
if(action.type === 'INCREMENTBY2'){
    return { counter : state.counter + 2};
}
if(action.type === 'DECREMENTBY2'){
    return { counter : state.counter - 2};
}
else return state;
}

const store = createStore(counterReducer) ;

export default store;