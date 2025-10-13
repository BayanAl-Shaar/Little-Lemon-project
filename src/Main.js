import heroImg from "./assets/hero.jpg";
import saladImg from "./assets/greek-salad.jpg";
import bruschettaImg from "./assets/bruschetta.svg";
import lemonImg from "./assets/lemon-dessert.jpg";

export default function Main() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="container grid">
          <div>
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <a className="cta" href="/reservations">Reserve a Table</a>
          </div>
          <img src={heroImg} alt="Mediterranean appetizers" />
        </div>
      </section>

      {/* SPECIALS */}
      <section className="container specials">
        <div className="head">
          <h2>This weeks specials!</h2>
          <button className="btn" type="button">Online Menu</button>
        </div>

        <div className="cards">
          <article className="card">
            <img src={saladImg} alt="Greek salad" />
            <div className="body">
              <h4>
                Greek salad <span className="price">$12.99</span>
              </h4>
              <p>
                Crispy lettuce, peppers, olives and feta, garnished with crunchy
                garlic and rosemary croutons.
              </p>
              <a href="/order">Order a delivery 🛵</a>
            </div>
          </article>

          <article className="card">
            <img src={bruschettaImg} alt="Bruschetta" />
            <div className="body">
              <h4>
                Bruschetta <span className="price">$5.99</span>
              </h4>
              <p>
                Grilled bread smeared with garlic and seasoned with salt and olive oil.
              </p>
              <a href="/order">Order a delivery 🛵</a>
            </div>
          </article>

          <article className="card">
            <img src={lemonImg} alt="Lemon Dessert" />
            <div className="body">
              <h4>
                Lemon Dessert <span className="price">$5.00</span>
              </h4>
              <p>
                From grandma’s recipe book — simple, bright, and authentic.
              </p>
              <a href="/order">Order a delivery 🛵</a>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
