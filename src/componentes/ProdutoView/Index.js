import React from 'react';
import './Index.css';

function ProdutoView(){
    return(
        <div className="ProdutoView">
           <div className="Filtro">
               <div className="Filtro-Nome">
                   <h3>Nome: </h3>
                   <input type="text" name="nome"></input>
               </div>
               <div className="Filtro-Material">
                   <h3>Material: </h3>
                   <input type="text" name="material"></input>
               </div>
               <div className="Filtro-Tipo">
                   <h3>Tipo: </h3>
                   <p><input type="radio" name="armas" value="armas" />Armas</p>
                   <p><input type="radio" name="armaduras" />Armaduras</p>
                   <p><input type="radio" name="equipamentos" />Equipamentos</p>
               </div>
               <div className="Filtro-Subtipo">
                   <h3>SubTipo: </h3>
                   <p><input type="radio" name="c-a-c" />Armas corpo a corpo</p>
                   <p><input type="radio" name="a-a-d" />Armas a distancia</p>
                   <p><input type="radio" name="a-l" />Armaduras leves</p>
                   <p><input type="radio" name="a-p" />Armaduras pesadas</p>
                   <p><input type="radio" name="escudos" />Escudos</p>
               </div>

           </div>


        </div>
    );
}

export default ProdutoView;