import React, { Component } from 'react'
import HijoNumero from './HijoNumero';

class PadreNumeros extends Component {

    generarNumeros = () => {
        var listaHijos = []
        for (var i = 1; i <= 4; i++) {
            var num = parseInt(Math.random() * 100) + 1;
            console.log(num)
            listaHijos.push(<li><HijoNumero key={num} numero={num} sumarPadre={this.sumarPadre}></HijoNumero></li>)
        }
        return listaHijos;
    }

    state = {
        lista: this.generarNumeros(),
        total: 0
    }

    sumarPadre = (sumando) => {
        this.setState({
            total: this.state.total + parseInt(sumando)

        })
        console.log(this.state.total);
    }

    addAleatorio = () => {
        var numero = parseInt(Math.random() * 100) + 1;
        console.log(numero);
        this.setState({
            lista: this.state.lista.push(<li><HijoNumero key={numero} numero={numero} sumarPadre={this.sumarPadre}></HijoNumero></li>)
        });
        this.setState({
            lista: this.state.lista
        });
    }

    render() {
        return (
            <div>
                <h1>Práctica: Padre Números</h1>
                <h2>Suma: {this.state.total}</h2>
                <button onClick={() => this.addAleatorio()}>Añadir aleatorio</button>
                <hr></hr>
                <ul style={{ listStyle: "none" }}>
                    {this.state.lista}
                </ul>
            </div>
        )
    }
}

export default PadreNumeros;