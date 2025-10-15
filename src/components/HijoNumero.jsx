import React, { Component } from 'react'

class HijoNumero extends Component {

    randNumero = parseInt(this.props.numero);

    render() {
        return (
            <div>
                <h3>Numero: {this.randNumero}</h3>
                <button onClick={() => this.props.sumarPadre(this.randNumero)}>Sumar</button>
            </div>
        )
    }
}

export default HijoNumero;