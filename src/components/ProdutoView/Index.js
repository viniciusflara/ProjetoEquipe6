import React, { useState, useReducer, useEffect } from 'react';
import './Index.css';
import { NavLink } from 'react-router-dom';
import Filtro from '../Filtro/index'
import DATA from './data'
// import Header from '../../pages/Header/Index'

function Lista({ data }) {
    return (
        <tr key={data.id}>
            <th>{data.name}</th>
            <td>{data.Tipo}</td>
            <td>{data.Material}</td>
            <td>{data.Subtipo}</td>
        </tr>
    );
}


function ProdutoView(props) {
    const [data, setData] = useState(DATA);
    const [filtro, setFiltro] = useState(false);
    const produtoList = data.map(data => <Lista key={data.id} data={data} />)

    let textButton = '';

    if (filtro) {
        textButton = 'Fechar';
    } else {
        textButton = 'Filtro';
    }
    // useEffect(
    //     () => {
    //         if (props.location.state) {
    //             const newData = [...data]
    //             console.log('antes ' + newData)
    //             newData.push(props.location.state.dado)
    //             setData(newData)
    //             console.log('depois ' + newData)
    //         }
    //     }, [props.location.state]

    // )


    return (
        <div className="ProdutoView">

            <div className="buttonRow">
                <div className="Filtro-Nome">
                    <input type="text" placeholder="Buscar..." name="nome"></input>
                </div>
                <button className="btnFiltro" onClick={() => { setFiltro(!filtro) }}>{textButton}</button>
                {/* <NavLink activeClassName="chosen" exact to="/produtocrud" className="btnAdicionar">+ Adicionar Produto</NavLink> */}
            </div>

            {filtro && <Filtro />}
            <table className="table">
                <thead className="thead">
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