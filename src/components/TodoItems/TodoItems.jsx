import React, { Component } from "react";

export default class TodoItems extends Component {
  constructor(props) {
    super(props);
    console.log(props.lista);

    this.delete = this.delete.bind(this);
  }
  delete(itemKey) {
    this.props.delete(itemKey);
  }
  render() {
    return (
      <div>
        <ul>
          {this.props.lista.map((item) => {
            return (
              <li onClick={() => this.delete(item.key)} key={item.key}>
                {item.text}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
