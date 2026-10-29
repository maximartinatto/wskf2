
import { useEffect } from "react";
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
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 600,
      disable: () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.refresh();
  }, [location.pathname]);

  return (
    <div className="App">
      <a className="skip-link" href="#main-content">Ir al contenido</a>
      {location.pathname !== '/' && <Nav/>}
      <Cursor/>
      <main id="main-content" tabIndex={-1}>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/wskfargentina" element={<WskfArgentina/>}/>
        <Route path="/wskfworld" element={<WskfWorld/>}/>
        <Route path="/shotokan" element={<Shotokan/>}/>
        <Route path="/eventos" element={<Eventos/>}/>
        <Route path="/dojos" element={<Dojos/>}/>
        <Route path="/contacto" element={<Contacto/>}/>
      </Routes>
      </main>
     
    </div>
  );
}

export default App;
