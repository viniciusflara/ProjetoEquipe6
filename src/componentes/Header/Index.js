import React from 'react';
import {
    Navbar,
    Nav,
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Index.css';


function Header() {
    return (
        <div className="Header">
            <Navbar expand="lg">
                <NavLink exact to="/"><Navbar.Brand id="bulldog">Bulldog Web Design</Navbar.Brand></NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto links">
                        <NavLink activeClassName="chosen" exact to="/" className="mr-3">Home</NavLink>
                        <NavLink activeClassName="chosen" exact to="/quem-somos" className="mr-3">Quem Somos</NavLink>
                        <NavLink activeClassName="chosen" exact to="/portifolio" className="mr-3">Portifólio</NavLink>
                        <NavLink activeClassName="chosen" exact to="/contato">Contato</NavLink>
                    </Nav>
                    <div className="bandeiras">
                        <img alt="brasil" src="./img/brazil.png" />
                        <img alt="usa" src="./img/usa.png" />
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Header;



