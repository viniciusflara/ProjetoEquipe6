import React, { useState } from 'react';
import './Index.css';
import { NavLink } from 'react-router-dom';
import Filtro from './Filtro'

const DATA = [{
    id: '123',
    name: 'Espada Longa',
    Tipo: 'Arma',
    Material: 'Ferro',
    Subtipo: 'Armas corpo-a-corpo'
}, {
    id: '456',
    name: 'Arco Recurvo',
    Tipo: 'Arma',
    Material: 'Madeira',
    Subtipo: 'Armas à distância'
}, {
    id: '789',
    name: 'Escudo',
    Tipo: 'Equipamento',
    Material: 'Ferro',
    Subtipo: 'Corpo-a-corpo'
}]

function Lista({ data }) {
    console.log(data);
    return (
        <tr key={data.id}>
            <th>{data.name}</th>
            <td>{data.Tipo}</td>
            <td>{data.Material}</td>
            <td>{data.Subtipo}</td>
        </tr>
    );
}


function ProdutoView() {
    const [data, setData] = useState(DATA);
    const [filtro, setFiltro] = useState(false);
    const produtoList = data.map(data => <Lista key={data.id} data={data} />)
    let textButton = '';

    if (filtro) {
        textButton = 'Fechar';
    } else {
        textButton = 'Filtro';
    }

    return (
        <div className="ProdutoView">

            <div className="buttonRow">
                <div className="Filtro-Nome">
                    <input type="text" placeholder="Buscar..." name="nome"></input>
                </div>
                <button className="btnFiltro" onClick={() => { setFiltro(!filtro) }}>{textButton}</button>
                <NavLink activeClassName="chosen" exact to="/produtocrud" className="btnAdicionar">+ Adicionar Produto</NavLink>
            </div>

            {filtro && <Filtro />}
            <table class="table">
                <thead class="thead">
                    <tr>
                        <th scope="col">Produto</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">Material</th>
                        <th scope="col">Subtipo</th>
                    </tr>
                </thead>
                <tbody>
                    {produtoList}
                </tbody>
            </table>




        </div>
    );
}

export default ProdutoView;