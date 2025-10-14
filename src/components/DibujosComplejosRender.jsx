import React, { Component } from 'react'

class DibujosComplejosRender extends Component {
    // Necesitamos un array con nombres y dicho array debe estar declarado en el state para actualizar el dibujo
    state = {
        nombres: ["Julio", "Pedro", "Manuel"]
    }

    generarNombre = () => {
        this.setState ({
            nombre: this.state.nombres.push("Lucía")
        });
        this.setState({
            nombres: this.state.nombres
        })
    }

    render() {
        return (
            <div style={{ backgroundColor: "antiqueWhite", textAlign: "center" , paddingBottom: "10px"}}>
                <h1>Dibujos Dinámicos en render JSX</h1>
                <button style={{backgroundColor:"LimeGreen", color: "white", fontWeight: "bolder",
                    borderRadius:"5px",padding: "10px"
                }} onClick={this.generarNombre}>Nuevo Nombre</button>
                {
                    // Este es codigo JSX
                    // El codigo logico debe contener un return
                    this.state.nombres.map((nombre, index) => {
                        // Este codigo no puede estar vacio, debe tener un return
                        return (<h3>¡Hola, {nombre}!</h3>);
                    })
                }
            </div>
        )
    }
}

export default DibujosComplejosRender;