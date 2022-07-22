import './App.css';
import Navbar from './componentes/Navbar';
import frente1 from './imagenes/frente1.jpg';
function App() {
  
  return (
    <div className="App">

      <img src={frente1} alt="predeterminado" />
      
     {/*} <header className="App-header OtraClase">
        <p>
          Bienvenidos
        </p>
    <button style = {{ color:'black', backgroundColor:'white', fontSize:'30px' }}> Boton </button>
      {imagen}
      </header>*/}
    
    <Navbar />
    

    </div>
  );
}

export default App;
