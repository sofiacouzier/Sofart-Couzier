import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './componentes/NavBar/NavBar';
import estilos from './app/estilos.css';
import ItemListConteiner from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/itemDetailConteiner/ItemDetailContainer';

function App() {
  return (

    <div className="App">
      <header className="App-header">
        <NavBar />

        <ItemListConteiner cantidad={18} />

        <ItemDetailContainer />


      </header>
    </div>
  );
}

export default App;