import React, { Component } from 'react'

class Comic extends Component {

  selFavorito = this.props.selectFavorito;

  render() {
    return (
      <div>
        <h2 style={{ color: "green" }}>{this.props.comic.titulo}</h2>
        <img style={{ width: "150px", height: "200px" }} src={this.props.comic.imagen}></img>
        <p>{this.props.comic.descripcion}</p>
        <button style={{ backgroundColor: "darkcyan", color: "white", padding: "8px 10px", fontWeight: "bold", borderRadius: "10px 8px" }}
          onClick={() => {
            // Llamar al metodo de PadreComics
            this.props.selectFavorito(this.props.comic);
          }}>FAV</button>
        <button style={{ backgroundColor: "red", color: "white", padding: "8px 10px", fontWeight: "bold", borderRadius: "10px 8px" }}
          onClick={() => {
            // Llamar al metodo de PadreComics
            this.props.deleteComic(this.props.index);
          }}>Eliminar</button>
      </div>
    )
  }
}

export default Comic;