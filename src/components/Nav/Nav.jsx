import style from './Nav.module.css';
import logo from '../../assets/logo.jpeg'

const Nav = () => {
    return (
       <div className={style.aside}>
            <div className={style.logo}>
                <img src={logo} href="/" alt='logo'></img>
            </div>
            <div className={style.titulo}>
                <h1>WSKF ARGENTINA</h1>
            </div>
           <ul className={style.nav}>
                <li><a href="/" class="active">HOME</a></li>
                <li><a href="/shotokan">SHOTOKAN</a></li>
                <li><a href="/wskfArgentina">WSKF ARGENTINA</a></li>
                <li><a href="/wskfworld">WSKF WORLD</a></li>
                <li><a href="/eventos">EVENTOS</a></li>
                <li><a href="/contacto">CONTACTO</a></li>
            </ul>
           
        </div>
    )
}

export default Nav;