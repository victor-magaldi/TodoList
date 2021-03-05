import React, { Component } from "react";
import Header from "./components/Header";
import Todolist from "./components/TodoList";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Todolist />
        <Home />
        <Sobre />
      </div>
    );
  }
}

export default App;
