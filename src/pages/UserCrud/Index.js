
import React, { useState } from 'react';
import './Index.css';

function UserCrud(){
    const [nome, setNome] = useState('');
    const [classe, setClasse] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');


    return(
    
    <>
    <div className="corpoUser">
        <div className='overlay'>
            <div className="UserCrud">
                <h1>Cadastre o Usuário</h1>
            </div>
            
            <form className='userForm'>
                
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