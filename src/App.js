import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './componentes/NavBar/NavBar';
import estilos from './app/estilos.css';
import ItemListConteiner from './componentes/ItemListContainer/ItemListContainer';
import Contador from './componentes/ItemListContainer/Contador';


function App() {
  return (

    <div className="App">
      <header className="App-header">
        <NavBar />

        <ItemListConteiner productos={17} />

        <Contador Productos={17} />



      </header>
    </div>
  );
}

export default App;