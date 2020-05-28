
import React, { useState } from 'react';
import './Index.css';

// import { Form , Container } from './styled';

class Usuario{
    constructor(nome, classe,email,senha){
        this.nome = nome;
        this.classe = classe;
        this.email = email;
        this.senha = senha;
    }
}

class Bd{

    constructor(){
        let id = localStorage.getItem('id');
        if(id === null){
            localStorage.setItem('id', 0);
        }
    }

    getProximoId(){
        let proximoId = localStorage.getItem('id');
        return parseInt(proximoId) + 1;
    }

    gravar(u){
        let id = this.getProximoId();
        localStorage.setItem(id, JSON.stringify(u));
        localStorage.setItem('id', id);
    }

}

let bd = new Bd();

function UserCrud(){
    const [nome, setNome] = useState('');
    const [classe, setClasse] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        let usuario = new Usuario(nome,classe,email,senha);
        bd.gravar(usuario);
    }

    return(
    
    <>
    <div className="corpoUser">
        <div className='overlay'>
            <div className="UserCrud">
                <h1>Cadastre o Usuário</h1>
            </div>
            
            <form className='userForm'onSubmit={handleSubmit}>
                
                <label htmlFor="nome">
                    Nome:
                    <input type="text" 
                    value={nome} 
                    onChange={e => setNome(e.target.value)}
                    placeholder="Seu nome"
                />
                </label>
                <label htmlFor="classe">
                    Classe:
                    <input type="text" 
                    value={classe} 
                    onChange={e => setClasse(e.target.value)}
                    placeholder="Sua Classe"
                />
                </label>
                <label htmlFor="email">
                    Email:
                    <input type="email" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Seu email"
                />
                </label>
                <label htmlFor="senha">
                    Senha:
                    <input type="password" 
                    value={senha} 
                    onChange={e => setSenha(e.target.value)}
                    placeholder="Sua senha"
                />
                </label>
                <button type="submit" >Cadastrar</button>

            </form>
        </div>
    </div> 
    </>
    );
}

export default UserCrud;