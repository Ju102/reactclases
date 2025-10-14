import React, { Component } from 'react'
import HijoDeporte from './HijoDeporte';

class PadreDeportes extends Component {
    deportes = ["Futebol", "Baloncesto", "Tenis", "Voleibol"];

    state = {
        favorito: ""
    }

    render() {
        return (
            <div style={{ textAlign: "center", backgroundColor: "lightyellow", paddingBottom: "8px" }}>
                <h1>Deportes PADRE</h1>
                {
                    this.deportes.map((deporte, index) => {
                        return (<HijoDeporte key={index} nombre={deporte}></HijoDeporte>);
                    })
                }
                <hr style={{marginTop: "30px"}}></hr>
                <p>Deporte favorito: <b></b></p>

            </div>
        )
    }
}

export default PadreDeportes;