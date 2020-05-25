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
  const data = [
    {
    id: '123',
    name: 'Espada Longa',
    Tipo: 'Arma',
    Material: 'Ferro',
    Subtipo: 'Armas corpo-a-corpo'
}, 
{
    id: '456',
    name: 'Arco Recurvo',
    Tipo: 'Arma',
    Material: 'Madeira',
    Subtipo: 'Armas à distância'
}, 
{
    id: '789',
    name: 'Escudo',
    Tipo: 'Equipamento',
    Material: 'Ferro',
    Subtipo: 'Corpo-a-corpo'
}
    
]
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
