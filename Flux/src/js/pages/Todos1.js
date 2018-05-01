import React from "react";

import Todo from "../components/Todo";
import todoStore from "../store/TodoStore";


export default class Todos1 extends React.Component {
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
            console.log("udate data 1...");
        });
        
        
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
      </div>
    );
  }
}
