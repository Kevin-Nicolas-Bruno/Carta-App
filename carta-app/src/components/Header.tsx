import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "../index.css";
export function Header() {
  const [menuActive, setMenuActive] = useState(false);
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };
  return (
    <header className="header">
      <div className="logo">MiLogo</div>
      <nav className={`nav ${menuActive ? "active" : ""}`}>
        <a href="/">Inicio</a>
        <a href="/about">Acerca de</a>
        <a href="/contact">Contacto</a>
      </nav>
      <button className="btn">Acción</button>
      <div className="menu-icon" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </header>
  );
}
export default Header;
