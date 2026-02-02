// src/components/sections/CallToAction.js
import { Link } from "react-router-dom";
import heroImg from "../../assets/hero.jpg";

export default function CallToAction() {
  return (
    <section className="hero">
      <div className="container grid">
        <div>
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Link className="cta" to="/booking">Reserve a Table</Link>
        </div>
        <img src={heroImg} alt="Mediterranean appetizers" />
      </div>
    </section>
  );
}
