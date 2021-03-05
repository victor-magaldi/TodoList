import React, { Component } from "react";
import Todolist from "./components/TodoList";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Lista de Tarefas</h1>
        <Todolist></Todolist>
      </div>
    );
  }
}

export default App;
