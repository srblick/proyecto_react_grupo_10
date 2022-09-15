import React from "react";

function Pelicula(props) {
    return(
        <article class="card">
            <div class="card-header">
                <div class="title"><h2>Doctor Strange en el multiverso de la locura</h2></div>
                <div class="date"><img src="images/clock.svg" alt="clock" class="icon-boton"/> 6 Mayo 2022</div>
                <div class="redes">
                    <a href="https://facebook.com"><img src="images/facebook.svg" alt="facebook" class="icon-social"/></a>
                    <a href="https://twitter.com"><img src="images/twitter.svg" alt="twitter" class="icon-social"/></a>
                    <a href="https://instagram.com"><img src="images/instagram.svg" alt="instagram" class="icon-social"/></a>
                </div>
            </div>
            <div class="card-content">
                <div class="poster">
                    <img src="images/doctor-strange-poster.jpg" alt="Poster Doctor Strange 2"/>
                </div>
                <div class="descripcion">
                    <h3>Synopsis</h3>
                    <p>En esta nueva aventura, el Doctor Strange (Benedict Cumberbatch) va a poner a prueba los límites de sus poderes y esto le llevará a explorar una nueva dimensión de sus capacidades. Tras haber fallado su hechizo, cuando trataba de ayudar a Spider-Man (Tom Holland) con su identidad secreta,  tiene que recurrir a una vieja amiga, Wanda Maximoff (Elizabeth Olsen) para enmendar su error. Como nunca antes, el famoso hechicero de Marvel explorará los oscuros rincones del Multiverso, donde deberá contar con nuevos y viejos aliados si quiere sobrevivir a las peligrosas realidades alternativas del universo y enfrentarse a un nuevo misterioso enemigo.</p>
                    <a href="" class="orden boton"><img src="images/shopping-cart.svg" alt="cart" class="icon-boton"/> PRE ORDER</a>
                    <a href="" class="leer-mas boton"><img src="images/more-horizontal.svg" alt="mas-info" class="icon-boton"/> READ MORE</a>
                </div>
                <div class="valoracion">
                    <p class="metricas">6.4 - Metametric</p>
                    <div class="barra">
                        <div class="puntaje" style="width: 64%;"></div>
                    </div>
                    <p class="metricas">4.5 - Photoshop</p>
                    <div class="barra">
                        <div class="puntaje" style="width: 45%;"></div>
                    </div>
                    <p class="metricas">6.4 - Metametric</p>
                    <div class="barra">
                        <div class="puntaje" style="width: 62%;"></div>
                    </div>
                </div>
            </div>
        </article>
    );
}
export default Pelicula;