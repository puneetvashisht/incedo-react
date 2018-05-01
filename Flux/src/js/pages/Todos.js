import React from "react";

import Todo from "../components/Todo";
import todoStore from "../store/TodoStore";

import * as TodoAction from "../action/TodoAction"


export default class Todos extends React.Component {
  constructor() {
    super();
      var todos = todoStore.getAllTodos();
    this.state = {
      todos: todos
    };
  }

    componentWillMount(){
        todoStore.on("change", ()=>{
            let todos = todoStore.getAllTodos();
            this.setState({todos: todos});
        });
        
        todoStore.on("update", ()=>{
            console.log("udate data...");
        });
        
        
    }
    
    createTodo(){
        let text = "Read Flux";
        let complete = false;
        TodoAction.createTodo(text, complete);
    }
    
  render() {
    const { todos } = this.state;

    const TodoComponents = todos.map((todo) => {
        return <Todo key={todo.id} {...todo}/>;
    });

    return (
      <div>
        <h1>Todos</h1>
        <ul>{TodoComponents}</ul>
        
        <button onClick={this.createTodo.bind(this)}>Create Todo</button>
      </div>
    );
  }
}
