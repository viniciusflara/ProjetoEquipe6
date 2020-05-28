import React from 'react';
import './globals.css';
import Header from './pages/Header/Index';
import ProdutoCrud from './pages/ProdutoCrud/Index';
import UserCrud from './pages/UserCrud/Index';
import ProdutoView from './pages/ProdutoView/Index';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './pages/Login/Index';

function Routes() {

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Header>

          <Route path="/produtoview" exact component={ProdutoView} />
          <Route path="/produtocrud" exact component={ProdutoCrud} />
          <Route path="/usercrud" exact component={UserCrud} />

        </Header>
      </Switch>

    </Router>
  );
}

export default Routes;
