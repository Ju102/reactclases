import React, { Component } from 'react'

class HijoDeporte extends Component {
    
    render() {
        return (
            <div>
                <h3 style={{color: "blue"}}>Deporte: {this.props.nombre}</h3>
                <button onClick={() => this.props.mostrarFavorito(this.props.nombre)}>Seleccionar Favorito</button>
            </div>
        )
    }
}

export default HijoDeporte;