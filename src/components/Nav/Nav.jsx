import style from './Nav.module.css';
import { NavLink } from 'react-router-dom';


const Nav = () => {
    return (
       <nav className={style.nav}>
        <div className={style.btn}>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/shotokan'>Shotokan</NavLink>
            <NavLink to='/wskfargentina'>WSKF Argentina</NavLink>
            <NavLink to='/wskfworld'>WSKF World</NavLink>
            <NavLink to='/eventos'>Eventos</NavLink>
            <NavLink to='/contacto'>Contacto</NavLink>
        </div>
       </nav>
    )
}

export default Nav;