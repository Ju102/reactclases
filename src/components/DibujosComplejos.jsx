// rcc

import React, { Component } from 'react'

class DibujosComplejos extends Component {
    dibujarNumeros = () => {
        let lista = [];
        for (var i = 1; i <= 7; i++) {
            var numero = parseInt(Math.random() * 100) + 1;
            // Mediante push vamos añadiendo elementos a la lista
            lista.push(<li key={i}>{numero}</li>);
        }
        return lista;
    }

  render() {
    return (
      <div style={{textAlign: "center"}}>
        <h1>Dibujos Dinámicos JSX</h1>
        <ul style={{listStyle: "none"}}>
            {this.dibujarNumeros()}
        </ul>

        {/* Código lógico de React */}
        {
            
        }
      </div>
    )
  }
}

export default DibujosComplejos;