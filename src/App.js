import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
     <Navbar/>
     <ItemListContainer title="Cursos en Línea"/>
     <Footer/>
    </div>
  );
}

export default App;
