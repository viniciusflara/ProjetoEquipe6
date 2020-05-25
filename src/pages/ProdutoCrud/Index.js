import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Index.css';

class ProdutoCrud extends Component {

    constructor(props) {
        super(props)

        this.state= {
            productname:'',
            material:'',
            type:'',
            subtype:''
        }
    }

  handleProductnameChange = event => {
      this.setState({
        productname: event.target.value
      })
  }

  handleMaterialChange = event => {
    this.setState({
      material: event.target.value
    })
  }

  handleTypeChange = event => {
    this.setState({
      type: event.target.value
    })
  }

  handleSubtypeChange = event => {
    this.setState({
      subtype: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(`${this.productname}, ${this.material}, ${this.type}, ${this.subtype}`);
    if (this.productname==='' || this.material==='' || this.type==='' || this.subtype==='') {
      alert('Todos os campos são obrigatórios');
    }
  }

  render() {
    const {productname, material, type, subtype} = this.state
    return(
        <div className="ProdutoCrud">
          <form onSubmit={this.handleSubmit}>

            <div className="name-input">
            {/* <label>Nome: </label> */}
            Nome: <input 
                    type="text"
                    value={productname}
                    onChange={this.handleProductnameChange}
                    placeholder="Ex.: espada, escudo,..." 
                    name="nome" 
                    />
            </div>

            <div className="material-input">
            {/* <label>Material: </label> */}
            Material: <input 
                        type="text" 
                        value={material}
                        onChange={this.handleMaterialChange}
                        placeholder="Ex.: madeira, ferro,..."  
                        name="material"/>
            </div>

            <div className="type-choice">
                Tipo:
                <select name="tipo" value={type} onChange={this.handleTypeChange}>
                    <option value="">Selecione</option>
                    <option value="1">Armas</option>
                    <option value="2">Armaduras</option>
                    <option value="3">Equipamentos</option>
                </select>
            </div>

            <div className="subtype-choice">
                Subtipo:
                <select name="subtipo" value={subtype} onChange={this.handleSubtypeChange}>
                    <option value="">Selecione</option>
                    <option value="1">Armas corpo-a-corpo</option>
                    <option value="2">Armas à distância</option>
                    <option value="3">Armaduras leves</option>
                    <option value="4">Armaduras pesadas</option>
                    <option value="5">Escudos</option>
                </select>
            </div>

            <button type="submit">Cadastrar</button>
            <Link to={"/ProdutoView"}>
              <button className="button-voltar">Voltar</button>
            </Link>
            
          </form>
        </div>
    );
  }
}

export default ProdutoCrud;