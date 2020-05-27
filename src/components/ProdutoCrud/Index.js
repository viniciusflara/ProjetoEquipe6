import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Index.css';

function ProdutoCrud() {

  const [name, setName] = useState('');
  const [material, setMaterial] = useState('');
  const [tipo, setTipo] = useState('');
  const [subtipo, setSubtipo] = useState('');
  const [erro, setErro] = useState('');

  const history = useHistory();

  const handleProductnameChange = event => {
    setName(event.target.value);
  }

  const handleMaterialChange = event => {
    setMaterial(event.target.value);
  }

  const handleTypeChange = event => {
    setTipo(event.target.value);
  }

  const handleSubtypeChange = event => {
    setSubtipo(event.target.value);
  }

  const handleSubmit = event => {
    event.preventDefault();
    const dado = {
      name: name,
      Tipo: tipo,
      Material: material,
      Subtipo: subtipo
    }
    if (name && material && tipo && subtipo) {
      history.push({ pathname: '/produtoview', state: { dado: dado } });
    } else
      handleError();
  }

  const handleError = () => {
    setErro('*Preencha todos os campos*');
  }

  return (
    <div className="ProdutoCrud">
      <div className='cinza'>
        <form className="register-box" onSubmit={handleSubmit}>

          <h1>Cadastre um novo produto</h1>
          <div className="erro">
            {erro}
          </div>
            <div className="inputs">
              <label>Nome: </label>
              <input
                type="text"
                value={name}
                onChange={handleProductnameChange}
                placeholder="Ex.: espada, escudo,..."
                name="nome"
              />
            </div>

            <div className="inputs">
              <label>Material: </label>
              <input
                type="text"
                value={material}
                onChange={handleMaterialChange}
                placeholder="Ex.: madeira, ferro,..."
                name="material" />
            </div>

            <div className='inputsEscolha'>
            <div className="escolha">
              <label>Tipo: </label>
              <select name="tipo" value={tipo} onChange={handleTypeChange}>
                <option value="">Selecione</option>
                <option value="Arma">Arma</option>
                <option value="Armadura">Armadura</option>
                <option value="Equipamento">Equipamento</option>
              </select>
            </div>

            <div className="escolha">
              <label>Subtipo: </label>
              <select name="subtipo" value={subtipo} onChange={handleSubtypeChange}>
                <option value="">Selecione</option>
                <option value="Arma corpo-a-corpo">Arma corpo-a-corpo</option>
                <option value="Arma à distância">Arma à distância</option>
                <option value="Armadura leve">Armadura leve</option>
                <option value="Armadura pesada">Armadura pesada</option>
                <option value="Escudo">Escudo</option>
              </select>
            </div>
          </div>
          <button type="submit">Cadastrar</button>
          <Link to={"/ProdutoView"}>
            <button className="button-voltar">Voltar</button>
          </Link>

        </form>
      </div>
    </div>
  );
}

export default ProdutoCrud;