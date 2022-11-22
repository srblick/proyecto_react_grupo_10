import './App.css';
import Pelicula from './Pelicula';
import peliculas from './json/peliculas.json'

function App() {
  return (
    <section>
      <h1>Peliculas en cartelera</h1>
      {peliculas.map((peli, index) =>
        <Pelicula
          key={index}
          title={peli.title}
          date={peli.date}
          synopsis={peli.synopsis}
          img={peli.img}
          altimg={peli.altimg}
          history={peli.history}        
          rate={peli.rate}        
          score={peli.score}        
        />)
      }
    </section>
  );
}

export default App;
