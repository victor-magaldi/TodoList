import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Todolist from "./components/TodoList";
import Erro from "./pages/Erro";

import Header from "./components/Header";
import Produto from "./pages/Produto";

const Routes = ({ children }) => {
  console.log(children);
  return (
    <BrowserRouter>
      <Header></Header>
      <Switch>
        {/* o exact vai garantir que home seja acessada só quando for exatamento o path */}
        <Route exact path="/" component={Home} />
        <Route path="/sobre" component={Sobre} />
        <Route path="/todo-list" component={Todolist} />

        <Route path="/produto/:id" component={Produto}></Route>
        {/* erro tem que ser por ultimo */}
        <Route path="/*" component={Erro}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
