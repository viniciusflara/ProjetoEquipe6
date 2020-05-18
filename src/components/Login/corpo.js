import React from "react";


function Corpo(props) {
    
    return (
        <div>
            <label>Usuário</label>
            <input type={Text} id="username"></input>
            <label>Senha</label>
            <input type={Text} id="password"></input>
            <button onClick={props.entrar}>Entrar</button>
            <button onClick={props.cadastrar}>Cadastrar</button>
        </div>
    );
}


export default Corpo;