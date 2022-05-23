import Navbar from "./components/NavBar";
import Home from "./components/Home";
import Acerca from "./components/AcercaDeMi";
import Skills from "./components/Skills"
import Proyectos from "./components/Proyectos";
import Contacto from "./components/Contacto";

function App() {
  return (
    <div className="App">
    <Navbar />  
    <Home />
    <Acerca />
    <Skills />
    <Proyectos />
    <Contacto />
    </div>
  );
}

export default App;
