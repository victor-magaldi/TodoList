import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./styles.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <h1>homee</h1>
        <Link to="/todo-list">Todo List</Link>
      </div>
    );
  }
}

export default Home;
