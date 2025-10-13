import logo from "./assets/Logo.svg";

export default function Footer() {
  return (
    <footer>
      <div className="container grid">
        <section>
          <img src={logo} alt="Little Lemon logo" style={{ height: 64 }} />
        </section>

        <section>
          <h4>Doormat Navigation</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reservations">Reservations</a></li>
            <li><a href="/order">Order Online</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </section>

        <section>
          <h4>Contact</h4>
          <address>
            123 Main Street, Chicago, IL<br />
            <a href="tel:+15551234567">+1 (555) 123-4567</a><br />
            <a href="mailto:info@littlelemon.com">info@littlelemon.com</a>
          </address>
        </section>

        <section>
          <h4>Social Media</h4>
          <ul>
            <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://www.facebook.com"  target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://twitter.com"        target="_blank" rel="noopener noreferrer">Twitter/X</a></li>
          </ul>
        </section>
      </div>
    </footer>
  );
}
