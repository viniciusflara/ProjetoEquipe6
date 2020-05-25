import React, { useState } from 'react';
import './Index.css';
import data from './data';
import { Link } from 'react-router-dom';

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [database, setData] = useState(data);
    const [validation, setValidation] = useState();


    const handleUsernameChange = event => {
        setUsername(event.target.value);
    }

    const handlePasswordChange = event => {
        setPassword(event.target.value);
    }

    const validate = () => {

        let userValidation = false;

        database.map(user => {
            if (username === user.username && password === user.password) {
                userValidation = true
            }
        })

        if (userValidation) {
            setValidation(true)

        } else {
            setValidation(false)
            setUsername('')
            setPassword('')
        }
        console.log(validation)
    }

    return (
        <div className="corpoLogin">
            <div className='overlay'>
                <div className='container'>
                    <div className='login-box'>

                        <h1>Online Blacksmith</h1>

                        {validation === false ?
                            <div className='validation'>
                                <label>Dados Incorretos</label>
                            </div>
                            : null}

                        <div className='textbox'>
                            <i className="fas fa-user"></i>
                            <input
                                type='text'
                                placeholder='Usuário'
                                onChange={handleUsernameChange}
                                value={username}>
                            </input>
                        </div>

                        <div className='textbox'>
                            <i className="fas fa-lock"></i>
                            <input
                                type='password'
                                placeholder='Senha'
                                onChange={handlePasswordChange}
                                value={password}>
                            </input>
                        </div>

                        <Link>
                            <button
                                className='button'
                                onClick={validate}
                            >Login
                        </button>
                        </Link>

                        <Link to={'/usercrud'}>
                            <button className='button'>Cadastre-se</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Login
