import React from 'react'
import { Component } from 'react'

// Podemos declarar metodos fuera de la clase
// Estos metodos no pueden utilizar nada del Component
function metodo() {
    console.log("Método sin funcionalidad");
}

class Contador extends Component {
    // La sintaxis del código HTML ha cambiado
    // No se utilizan palabras como var,let o const
    numero = parseInt(this.props.inicio);

    // Con los metodos sucede lo mismo
    incrementarNumero = () => {
        // Para acceder a las variables de clase, debemos usar la palabra clave this
        this.numero += 1;
        this.setState({
            valor: this.numero
        })
        
        console.log(this.numero);
    }

    state = {
        valor: parseInt(this.props.inicio)
    }



    render() {
        return (<div>
            <h1 style={{ color: "blue" }}>Contador en JSX desde {this.props.inicio}</h1>
            <h2>Valor: {this.state.valor}</h2>

            {/*La llamada a los metodos se realiza con this y no hace falta utilizar lambda ni parentesis*/}
            <button onClick={this.incrementarNumero}>Incrementar</button>
            <button onClick={() => {
                // Codigo JSX
                metodo();
                // this.incrementarNumero();
            }}>Botón Inútil</button>

        </div>);
    }
}

export default Contador;

