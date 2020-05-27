import React from 'react';
import './globals.css';
import './script';
import Header from './pages/Header/Index';

import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';

import Login from './pages/Login/Index';
// import ProdutoCrud from './components/ProdutoCrud/Index';
// import ProdutoView from './components/ProdutoView/Index';
// import UserCrud from './components/UserCrud/Index';

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
        {/* <Header /> */}
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/Header" exact component={Header} />
          {/* <Route path="/produtoview" exact component={ProdutoView} />
          <Route path="/usercrud" exact component={UserCrud} /> */}
        </Switch>
      </Router>
  );
}

export default Routes;
