import React, { Component } from "react";
import { Link } from "react-router-dom";

class Erro extends Component {
  constructor(props) {
    super(props);
    this.state = { termoPesquisado: "" };
  }
  componentDidMount() {
    console.log(this.props.match.params[0]);
    const termoParam = this.props.match.params[0];
    this.setState({ termoPesquisado: termoParam });
    console.log(this.state);
  }
  render() {
    return (
      <div>
        <h1>Ops Pagina não encontrada</h1>
        <h3>você está Procurando por: {this.state.termoPesquisado}</h3>
        <Link to="/">voltar para Home</Link>
      </div>
    );
  }
}

export default Erro;
