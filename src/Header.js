// src/Header.js
import logo from "./assets/Logo.svg";
import Nav from "./Nav";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="header-grid container">
        <Link to="/" className="logo">
          <img src={logo} alt="Little Lemon logo" />
        </Link>
        <Nav />
      </div>
    </header>
  );
}
