import React, { Component } from 'react'
import HijoDeporte from './HijoDeporte';

class PadreDeportes extends Component {
    deportes = ["Futebol", "Basquetebol", "Tênis", "Voleibol"];

    state = {
        favorito: "",
    }

    mostrarFavorito = (fav) => {
        this.setState({
            favorito: fav
        });
    }

    render() {
        return (
            <div style={{ textAlign: "center", backgroundColor: "lightyellow", paddingBottom: "8px" }}>
                <h1>Deportes PADRE</h1>
                {
                    this.deportes.map((deporte, index) => {
                        return (<HijoDeporte key={index} nombre={deporte} mostrarFavorito={this.mostrarFavorito}></HijoDeporte>);
                    })
                }
                <hr style={{ marginTop: "30px" }}></hr>
                <div style={{ backgroundColor: "lightgreen", width: "auto"}}>
                    <p>Deporte favorito: <b>{this.state.favorito}</b> </p>
                </div>

            </div>
        )
    }
}

export default PadreDeportes;