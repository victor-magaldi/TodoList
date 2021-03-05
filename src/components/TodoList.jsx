import React, { Component } from "react";
import TodoItems from "./TodoItems";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tarefa: "",
      items: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  handleChange(evt) {
    this.setState({ tarefa: evt.target.value });
  }
  deleteItem(key) {
    console.log("item deletado", key);
    let filtro = this.state.items.filter((item) => {
      return item.key !== key;
    });
    this.setState({ items: [...filtro] });
  }
  addItem(event) {
    let state = this.state;
    let itemsState = state.items;

    if (this._tarefaInput.value != null) {
      let newItem = {
        text: this._tarefaInput.value,
        key: Date.now(),
      };
      this.setState({ items: [...itemsState, newItem] });
      this.setState({ tarefa: "" });
    }
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.addItem}>
          <input
            type="text"
            placeholder=" Digite a Nova Tarefa"
            value={this.state.tarefa}
            onChange={this.handleChange}
            ref={(event) => {
              this._tarefaInput = event;
            }}
          />

          <button type="submit">Adicionar</button>
        </form>

        <TodoItems lista={this.state.items} delete={this.deleteItem} />
      </div>
    );
  }
}
