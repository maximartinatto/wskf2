import "./App.css" ;
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav.jsx";
import Home from "./components/Home/Home.jsx";
import Shotokan from "./components/Shotokan/Shotokan.jsx";
import WskfArgentina from "./components/WskfArgentina/WskfArgentina.jsx";
import WskfWorld from "./components/WskfWorld/WskfWorld.jsx";
import Eventos from "./components/Eventos/Eventos.jsx";
import Contacto from "./components/Contacto/Contacto.jsx";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/shotokan" element={<Shotokan/>}/>
        <Route path="/wskfargentina" element={<WskfArgentina/>}/>
        <Route path="/wskfworld" element={<WskfWorld/>}/>
        <Route path="/eventos" element={<Eventos/>}/>
        <Route path="/contacto" element={<Contacto/>}/>
      </Routes>
    </div>
  );
}

export default App;
