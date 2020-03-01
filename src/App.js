import React from 'react';
import './componentes/globals.css';
import './script';

import Footer from './componentes/Footer/Index';
import Header from './componentes/Header/Index';

import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';

import Inicio from './componentes/Inicio/Index';
import Contato from './componentes/Contato/Index';
import Portifolio from './componentes/Portifolio/Index';
import Quemsomos from './componentes/QuemSomos/Index';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Inicio} />
          <Route path="/contato" exact component={Contato} />
          <Route path="/portifolio" exact component={Portifolio} />
          <Route path="/quem-somos" exact component={Quemsomos} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
