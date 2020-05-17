import React from 'react';
import './globals.css';
import './script';
import Header from './components/Header/Index';

import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';

import Login from './pages/Login/Index';
import ProdutoCrud from './pages/ProdutoCrud/Index';
import ProdutoView from './pages/ProdutoView/Index';
import UserCrud from './pages/UserCrud/Index';

function Routes() {
  return (
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/produtocrud" exact component={ProdutoCrud} />
          <Route path="/produtoview" exact component={ProdutoView} />
          <Route path="/usercrud" exact component={UserCrud} />
        </Switch>
      </Router>
  );
}

export default Routes;
