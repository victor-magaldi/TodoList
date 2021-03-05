import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Todolist from "./components/TodoList";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* o exact vai garantir que home seja acessada só quando for exatamento o path */}
        <Route exact path="/" component={Home} />
        <Route path="/sobre" component={Sobre} />
        <Route path="/todo-list" component={Todolist} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
