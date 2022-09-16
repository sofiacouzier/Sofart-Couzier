import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './componentes/NavBar/NavBar';
import estilos from './app/estilos.css';
import ItemListConteiner from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/itemDetailConteiner/ItemDetailContainer';
import Router from './app/Router';

function App() {
  return (

    <div className="App">
      <header className="App-header">
        <Router />



      </header>
    </div>
  );
}

export default App;