import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const pages = [
  { path: "/wskfargentina", label: "WSKF Argentina" },
  { path: "/shotokan", label: "Shotokan" },
  { path: "/wskfworld", label: "WSKF World" },
  { path: "/eventos", label: "Eventos" },
  { path: "/dojos", label: "Dojos" },
  { path: "/contacto", label: "Contacto" },
];

const Nav = () => {
  const [expanded, setExpanded] = useState(false);
  const { pathname } = useLocation();
  const navRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => setExpanded(false), [pathname]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1200px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setExpanded(false);
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  useEffect(() => {
    if (!expanded) return;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setExpanded(false);
        toggleRef.current?.focus();
      }
    };
    const closeOnOutside = (event) => {
      if (!navRef.current?.contains(event.target)) setExpanded(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOnOutside);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOnOutside);
    };
  }, [expanded]);

  return (
    <nav ref={navRef} className="site-nav navbar navbar-expand-xl navbar-dark bg-dark sticky-top" aria-label="Navegación principal">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/home" onClick={() => setExpanded(false)}>
          WSKF Argentina
        </Link>
        <button
          ref={toggleRef}
          className="navbar-toggler"
          type="button"
          aria-controls="navbarNav"
          aria-expanded={expanded}
          aria-label={expanded ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setExpanded((value) => !value)}
        >
          <span className="navbar-toggler-icon" aria-hidden="true" />
        </button>
        <div className={`collapse navbar-collapse${expanded ? " show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {pages.map(({ path, label }) => (
              <li className="nav-item" key={path}>
                <NavLink className="nav-link" to={path} onClick={() => setExpanded(false)}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
