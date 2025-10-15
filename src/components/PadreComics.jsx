import React, { Component } from 'react'
import Comic from './Comic';

class PadreComics extends Component {

    state = {
        comics: [
            {
                titulo: "Spiderman",
                imagen:
                    "https://3.bp.blogspot.com/-i70Zu_LAHwI/T290xxduu-I/AAAAAAAALq8/8bXDrdvW50o/s1600/spiderman1.jpg",
                descripcion: "Hombre araña"
            },
            {
                titulo: "Wolverine",
                imagen:
                    "https://images-na.ssl-images-amazon.com/images/I/51c1Q1IdUBL._SX259_BO1,204,203,200_.jpg",
                descripcion: "Lobinho"
            },
            {
                titulo: "Guardianes de la Galaxia",
                imagen:
                    "https://www.normacomics.com/media/catalog/product/cache/0d53bfb8e6abd9c2bc6a754fde669403/g/u/guardianes_galaxia_guadianes_infinito.jpg",
                descripcion: "Yo soy Groot"
            },
            {
                titulo: "Avengers",
                imagen:
                    "https://d26lpennugtm8s.cloudfront.net/stores/057/977/products/ma_avengers_01_01-891178138c020318f315132687055371-640-0.jpg",
                descripcion: "O Vengadorinhos"
            },
            {
                titulo: "Spawn",
                imagen:
                    "https://i.pinimg.com/originals/e1/d8/ff/e1d8ff4aeab5e567798635008fe98ee1.png",
                descripcion: "Bombardero cocodrilo"
            },
            {
                titulo: "Batman",
                imagen:
                    "https://www.comicverso.com/wp-content/uploads/2020/06/The-Killing-Joke-657x1024.jpg",
                descripcion: "Murciegálo"
            }
        ],
        favorito: null
    }

    borrarComic = (index) => {
        this.state.comics.splice(parseInt(index), 1) // En la posición index, elimina 1.
        this.setState({
            comics: this.state.comics
        });

    }

    seleccionarFavorito = (favComic) => {
        this.setState({
            favorito: favComic
        })
    }

    render() {
        return (
            <div style={{ textAlign: "center" }}>
                <h1 style={{ color: "blue" }}>Padre Cómics</h1>
                {
                    this.state.favorito &&
                    <div style={{ backgroundColor: "antiquewhite", padding: "20px" }}>
                        <img style={{ width: "80x", height: "130px" }} src={this.state.favorito.imagen}></img>
                        <h4 style={{ margin: "1px" }}>{this.state.favorito.titulo}</h4>
                    </div>
                }
                {
                    this.state.comics.map((comic, index) => {
                        /*return (<Comic key={index} titulo={comic.titulo} imagen={comic.imagen} descripcion={comic.descripcion}></Comic>)*/
                        return (<Comic key={index} index={index} comic={comic} selectFavorito={this.seleccionarFavorito}
                            deleteComic={this.borrarComic}></Comic>) // Pasar el objeto Comic directamente
                    })
                }
            </div>
        )
    }
}

export default PadreComics;