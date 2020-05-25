import React, {Component} from 'react';
import { Link , useHistory } from 'react-router-dom';
import './Index.css';
import DATA from '../ProdutoView/data'

class ProdutoCrud extends Component {
    constructor(props) {
       
        super(props)

        this.state= {
            name:'',
            material:'',
            tipo:'',
            subtipo:'',
            data: DATA
        }
        this.handleProductnameChange = this.handleProductnameChange.bind(this)
        this.handleMaterialChange = this.handleMaterialChange.bind(this)
        this.handleTypeChange = this.handleTypeChange.bind(this)
        this.handleSubtypeChange = this.handleSubtypeChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


  
  handleProductnameChange = event => {
      this.setState({
        name: event.target.value
      })
  }

  handleMaterialChange = event => {
    this.setState({
      material: event.target.value
    })
  }

  handleTypeChange = event => {
    this.setState({
      tipo: event.target.value
    })
  }

  handleSubtypeChange = event => {
    this.setState({
      subtipo: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    const dado = {
      name: this.state.name,
      Tipo: this.state.tipo,
      Material: this.state.material, 
      Subtipo: this.state.subtipo
    }
    
    this.props.history.push({pathname: '/produtoview', state:{dado:dado}})
  }

  render() {
    const {name, material, tipo, subtipo} = this.state
    return(
        <div className="ProdutoCrud">
          <form onSubmit={this.handleSubmit}>

            <div className="name-input">
            {/* <label>Nome: </label> */}
            Nome: <input 
                    type="text"
                    value={name}
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
                <select name="tipo" value={tipo} onChange={this.handleTypeChange}>
                    <option value="">Selecione</option>
                    <option value="1">Armas</option>
                    <option value="2">Armaduras</option>
                    <option value="3">Equipamentos</option>
                </select>
            </div>

            <div className="subtype-choice">
                Subtipo:
                <select name="subtipo" value={subtipo} onChange={this.handleSubtypeChange}>
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