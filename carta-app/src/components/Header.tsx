import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "../index.css";
import logo from "../img/logo.png";
export function Header() {
  const [menuActive, setMenuActive] = useState(false);
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };
  return (
    <header className="header">
      <div className="div-logo">
        <img className="logo" src={logo} alt="" /></div>
      <nav className={`nav ${menuActive ? "active" : ""}`}>
        <a href="/">Inicio</a>
        <a href="/about">Acerca de</a>
        <a href="/contact">Contacto</a>
      </nav>
      <button className="btn">Iniciar Sesión</button>
      <div className="menu-icon" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </header>
  );
}
export default Header;
