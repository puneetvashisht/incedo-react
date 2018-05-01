import EventEmitter from 'events';
import dispatcher from '../dispatcher';

class TodoStore extends EventEmitter{
    constructor(){
        super();
        this.todos = [
          {
              id: 11,
              text: "Read React",
              complete: false
          },
          {
              id: 12,
              text: "Read Angular",
              complete: true
          },
          {
              id: 13,
              text: "Read ES6",
              complete: false
          }
      ]
    }
    
    getAllTodos(){
        return this.todos;
    }
    
    createTodo(text, completed){
        let id=Date.now();
        this.todos.push({id: id, text: text, complete: completed});
        
        this.emit("change");
    }
    
    updateTodo(){
        
        this.emit("update");
    }
    
    handleAction(action){
        console.log(action);
        switch(action.type){
            case 'CREATE_TODO': this.createTodo(action.text, action.complete);
                break;
        }
    }
    
}

var todoStore = new TodoStore;
//console.log(todoStore.getAllTodos());
//window.todoStore = todoStore;
dispatcher.register(todoStore.handleAction.bind(todoStore));
//window.dispatcher = dispatcher;
export default todoStore;