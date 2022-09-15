import React from "react";

function Pelicula(props) {
    return(
        <article className="card">
            <div className="card-header">
                <div className="title"><h2>{props.title}</h2></div>
                <div className="date"><img src="images/clock.svg" alt="clock" className="icon-boton"/>{props.date}</div>
                <div className="redes">
                    <a href="https://facebook.com"><img src="images/facebook.svg" alt="facebook" className="icon-social"/></a>
                    <a href="https://twitter.com"><img src="images/twitter.svg" alt="twitter" className="icon-social"/></a>
                    <a href="https://instagram.com"><img src="images/instagram.svg" alt="instagram" className="icon-social"/></a>
                </div>
            </div>
            <div className="card-content">
                <div className="poster">
                    <img src={props.img} alt={props.altimg}/>
                </div>
                <div className="descripcion">
                    <h3>Synopsis</h3>
                    <p>{props.synopsis}</p>
                    <a href="" className="orden boton"><img src="images/shopping-cart.svg" alt="cart" className="icon-boton"/> PRE ORDER</a>
                    <a href="" className="leer-mas boton"><img src="images/more-horizontal.svg" alt="mas-info" className="icon-boton"/> READ MORE</a>
                </div>
                <div className="valoracion">
                    <p className="metricas">{props.score} - score</p>
                    <div className="barra">
                        <div className="puntaje" style={{width: '80%',}}></div>
                    </div>
                    <p className="metricas">4.5 - Photoshop</p>
                    <div className="barra">
                        <div className="puntaje" style={{width: '45%',}}></div>
                    </div>
                    <p className="metricas">6.4 - Metametric</p>
                    <div className="barra">
                        <div className="puntaje" style={{width: '62%'}}></div>
                    </div>
                </div>
            </div>
        </article>
    );
}
export default Pelicula;