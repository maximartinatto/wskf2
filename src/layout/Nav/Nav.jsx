import React from "react";
import { Link } from "react-router-dom";

const pages = [
  "WskfArgentina",
  "Shotokan",
  "WskfWorld",
  "Eventos",
  "Dojos",
  "Contacto",
];

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">

      <div className="container">

        <Link className="navbar-brand fw-bold" to="/home">
          WSKF Argentina
        </Link>

        {/* botón hamburguesa */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* menú */}
        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav ms-auto">

            {pages.map((page) => (
              <li className="nav-item" key={page}>
                <Link
                  className="nav-link"
                  to={`/${page}`}
                >
                  {page}
                </Link>
              </li>
            ))}

          </ul>

        </div>

      </div>

    </nav>
  );
};

export default Nav;
