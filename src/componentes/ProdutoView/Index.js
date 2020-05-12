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

function showFiltro(i) {
    document.getElementsByClassName('showFiltro')[i].style.display = "block";
    document.getElementsByClassName('btnFiltro')[i].innerHTML = "Fechar";
    document.getElementsByClassName('btnFiltro')[i].onclick= () => { closeFiltro(i) };
}
function closeFiltro(i) {
    console.log("Funcionou");
    document.getElementsByClassName('showFiltro')[i].style.display = "none";
    document.getElementsByClassName('btnFiltro')[i].innerHTML = "Filtro";
    document.getElementsByClassName('btnFiltro')[i].onclick = () => { showFiltro(i) };
}

function ProdutoView() {
    const [data, setData] = useState(DATA);

    const produtoList = data.map(data => <Lista key={data.id} data={data} />)

    return (
        <div className="ProdutoView">
            <Filtro />
            <div className="buttonRow">
                <button className="btnFiltro" onClick={() => showFiltro(0)}>Filtro</button>
                <NavLink activeClassName="chosen" exact to="/produtocrud" className="btnAdicionar">+ Adicionar Produto</NavLink>
            </div>
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