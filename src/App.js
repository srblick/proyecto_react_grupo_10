import logo from './logo.svg';
import './App.css';
import Pelicula from './Pelicula';
import peliculas from './json/peliculas.json'

function App() {
  return (
  <section>
    <h1>Peliculas en cartelera</h1>
    {peliculas.map(peli =>
      <Pelicula
        title={peli.title}
        date={peli.date}
        synopsis={peli.synopsis}
        img={peli.img}
        altimg={peli.altimg}
        punjaje={peli.score}        
      />)
    }
  </section>
  );
}

export default App;
