// src/components/sections/Specials.js
import saladImg from "../../assets/greek-salad.jpg";
import bruschettaImg from "../../assets/bruschetta.svg";
import lemonImg from "../../assets/lemon-dessert.jpg";
import { Link } from "react-router-dom";

const specials = [
  {
    id: "salad",
    title: "Greek salad",
    price: "$12.99",
    image: saladImg,
    description:
      "Crispy lettuce, peppers, olives and feta, garnished with crunchy garlic and rosemary croutons."
  },
  {
    id: "bruschetta",
    title: "Bruschetta",
    price: "$5.99",
    image: bruschettaImg,
    description:
      "Grilled bread smeared with garlic and seasoned with salt and olive oil."
  },
  {
    id: "lemon",
    title: "Lemon Dessert",
    price: "$5.00",
    image: lemonImg,
    description:
      "From grandma’s recipe book — simple, bright, and authentic."
  }
];

export default function Specials() {
  return (
    <section className="container specials">
      <div className="head">
        <h2>This weeks specials!</h2>
        <button className="btn" type="button">Online Menu</button>
      </div>

      <div className="cards">
        {specials.map(item => (
          <article className="card" key={item.id}>
            <img src={item.image} alt={item.title} />
            <div className="body">
              <h4>
                {item.title} <span className="price">{item.price}</span>
              </h4>
              <p>{item.description}</p>
              <Link to="/order">Order a delivery 🛵</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
