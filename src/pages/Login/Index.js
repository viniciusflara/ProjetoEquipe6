import React, { Component } from 'react';
import './Index.css';
import Corpo from '../../components/Login/corpo';
import data from '../../components/Login/data';

class Login extends Component {
    
    constructor() {
        super() 
        
        this.state = {
            data: data,
            usuario:'',
            senha:''
        }
    }

    
    entrar = () => {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        let validacao = false;
        
        this.state.data.map(dado => {
            if (username === dado.username && password === dado.password) {
                validacao = !validacao;
                return validacao;
        
            }
        })
            validacao ? window.location.href = '/produtoview' : alert("Dados Incorretos");
    }


    cadastrar = () => window.location.href = '/usercrud';
    
    
    render() {
        return (
            <Corpo 
            entrar={this.entrar} 
            cadastrar={this.cadastrar}
            />
        );
    }
}

export default Login;