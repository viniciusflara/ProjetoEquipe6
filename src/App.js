import React from 'react';
import './componentes/globals.css';
import './script';

import Footer from './componentes/Footer/Index';
import Header from './componentes/Header/Index';

import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';

import Login from './componentes/Login/Index';
import ProdutoCrud from './componentes/ProdutoCrud/Index';
import ProdutoView from './componentes/ProdutoView/Index';
import UserCrud from './componentes/UserCrud/Index';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/produtocrud" exact component={ProdutoCrud} />
          <Route path="/produtoview" exact component={ProdutoView} />
          <Route path="/usercrud" exact component={UserCrud} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
