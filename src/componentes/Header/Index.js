import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Index.css';


function Header() {
    return (
        <div className="Header">
            <Navbar expand="lg">
                <NavLink exact to="/"><Navbar.Brand id="bulldog"><img src="./img/370-3704543_man-at-arms-blacksmith-blacksmith-silhouette-clip-art.png"/>Online Blacksmith</Navbar.Brand></NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto links">
                        <NavLink activeClassName="chosen" exact to="/" className="mr-3">Login</NavLink>
                        <NavLink activeClassName="chosen" exact to="/produtocrud" className="mr-3">Cadastrar Produtos</NavLink>
                        <NavLink activeClassName="chosen" exact to="/produtoview" className="mr-3">Lista de Produtos</NavLink>
                        <NavLink activeClassName="chosen" exact to="/usercrud">Cadastro de Pessoas</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Header;



