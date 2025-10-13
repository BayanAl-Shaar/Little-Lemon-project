// src/Header.js
import logo from "./assets/Logo.svg";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className="header">
      <div className="header-grid container">
        <a href="/" className="logo">
          <img src={logo} alt="Little Lemon logo" />
        </a>

        {/* Nav lives inside the header */}
        <Nav />
      </div>
    </header>
  );
}
