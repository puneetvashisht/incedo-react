
const createStore = require('redux').createStore

let cagtegories = []

const reducer = (state=cagtegories, action) => {
    console.log(action);
    if(action.type == "SPLIT_STR"){
       return action.payload.split('') 
    }
    if(action.type == "ADD_CHAR"){
        return [...state, action.payload]
     }
    return state;
}
// One Store
const store = createStore(reducer)
store.subscribe(()=> {
    console.log('[SUBSCRIBE]', store.getState());
})

console.log(store.getState());
const action1 = {
    type: "SPLIT_STR",
    payload: "ABCD"
}
store.dispatch(action1)


const action2 = {
    type: "ADD_CHAR",
    payload: "E"
}
store.dispatch(action2)










// Actions dispatch


// RESULT