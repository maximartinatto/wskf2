import "./App.css" ;
import AOS from "aos";
import { Routes, Route, useLocation } from "react-router-dom";
import Cursor from "./components/cursor/mousemove"
import Nav from "./layout/Nav/Nav.jsx";
import LandingPage from './layout/LandingPage/LandingPage';
import Home from "./layout/Home/Home.jsx";
import Shotokan from "./layout/Shotokan/Shotokan.jsx";
import WskfArgentina from "./layout/WskfArgentina/WskfArgentina.jsx";
import WskfWorld from "./layout/WskfWorld/WskfWorld";
import Dojos from "./layout/Dojos/Dojos"
import Eventos from "./layout/Eventos/Eventos.jsx";
import Contacto from "./layout/Contacto/Contacto.jsx";

function App() {
  AOS.init();
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname === '/' ? <LandingPage/> : <Nav/>}
      <Cursor/>
      
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/wskfargentina" element={<WskfArgentina/>}/>
        <Route path="/wskfworld" element={<WskfWorld/>}/>
        <Route path="/shotokan" element={<Shotokan/>}/>
        <Route path="/eventos" element={<Eventos/>}/>
        <Route path="/dojos" element={<Dojos/>}/>
        <Route path="/contacto" element={<Contacto/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
