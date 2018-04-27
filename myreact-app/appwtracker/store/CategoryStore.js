import EventEmitter from 'events';
import dispatcher from '../dispatcher';

class CategoryStore extends EventEmitter{
    constructor(){
        super();
        this.categories = [
         
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

    getCategories(){
        return this.categories;
    }

    fetchCategories(categories){
        this.categories = categories
        this.emit("category_change");
    }
    
    handleAction(action){
        console.log(action);
        switch(action.type){
            case 'FETCH_CATEGORIES': this.fetchCategories(action.categories);
                break;
        }
    }
    
}

var categoryStore = new CategoryStore();
//console.log(todoStore.getAllTodos());
//window.todoStore = todoStore;
dispatcher.register(categoryStore.handleAction.bind(categoryStore));
//window.dispatcher = dispatcher;
export default categoryStore;