
import dispatcher from '../dispatcher';

export function createTodo(text, completed){
    //API call to post todo
    dispatcher.dispatch({type:"CREATE_TODO", text: text, complete: completed});
}

export function deleteTodo(id){
    dispatcher.dispatch({type:"DELETE_TODO", id: id});
}

