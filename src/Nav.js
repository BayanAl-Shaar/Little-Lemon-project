// src/Nav.js
import { NavLink } from "react-router-dom";

export default function Nav() {
  const linkClass = ({ isActive }) => isActive ? "active" : undefined;

  return (
    <nav className="site-nav" aria-label="Primary">
      <ul>
        <li><NavLink to="/" end className={linkClass}>Home</NavLink></li>
        <li><NavLink to="/about" className={linkClass}>About</NavLink></li>
        <li><NavLink to="/menu" className={linkClass}>Menu</NavLink></li>
        <li><NavLink to="/booking" className={linkClass}>Reservations</NavLink></li>
        <li><NavLink to="/order" className={linkClass}>Order Online</NavLink></li>
        <li><NavLink to="/login" className={linkClass}>Login</NavLink></li>
      </ul>
    </nav>
  );
}
