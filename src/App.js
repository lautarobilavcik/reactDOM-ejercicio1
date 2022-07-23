import './App.css';
import Navbar from './componentes/Navbar';
import ItemListContainer from './componentes/ItemListContainer';



function App() {
  
  return (
    <div className="App">
     {/*} <header className="App-header OtraClase">
        <p>
          Bienvenidos
        </p>
    <button style = {{ color:'black', backgroundColor:'white', fontSize:'30px' }}> Boton </button>
      {imagen}
      </header>*/}
    
    <Navbar />
    <ItemListContainer greeting='Hola'> </ItemListContainer>
  
    </div>
  );
}

export default App;
