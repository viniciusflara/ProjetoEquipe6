import React from 'react';
import './index.css';

function Filtro() {
    return (
        <div className="showFiltro" id="showFiltro">
        <div className="Filtro">
            
            <div className="Filtro-Tipo">
                <h3>Tipo : </h3>
                <p><input type="checkbox" name="armas" value="armas" />  Armas</p>
                <p><input type="checkbox" name="armaduras" />  Armaduras</p>
                <p><input type="checkbox" name="equipamentos" />  Equipamentos</p>
            </div>
            <div className="Filtro-Subtipo">
                <h3>SubTipo : </h3>
                <p><input type="checkbox" name="c-a-c" />  Armas corpo a corpo</p>
                <p><input type="checkbox" name="a-a-d" />  Armas a distancia</p>
                <p><input type="checkbox" name="a-l" />  Armaduras leves</p>
                <p><input type="checkbox" name="a-p" />  Armaduras pesadas</p>
                <p><input type="checkbox" name="escudos" />  Escudos</p>
            </div>
        </div>
    </div>
    )
}

export default Filtro;