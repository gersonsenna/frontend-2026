import { NavLink, Link } from "react-router";
import "./Menu.css";

function Menu() {
  return (
    <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/settings">Settings</NavLink></li>
        <li><Link to="#">Sair</Link></li>
      </ul>
    </nav>
  );
}

export default Menu;
