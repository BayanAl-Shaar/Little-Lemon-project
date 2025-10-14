// src/components/sections/Chicago.js
import chef1 from "../../assets/greek-salad.jpg";
import chef2 from "../../assets/lemon-dessert.jpg";

export default function Chicago() {
  return (
    <section className="container about">
      <div className="about-text">
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
          Little Lemon is run by two Italian brothers, Mario and Adrian, who
          moved to the United States to pursue their shared dream of owning a
          restaurant. Their recipes are rooted in family traditions and bring
          a fresh, modern twist to Mediterranean cuisine.
        </p>
        <p>
          We source ingredients locally when possible and craft each dish with
          care. Come visit us and taste the difference.
        </p>
      </div>
      <div className="about-photos">
        <img src={chef1} alt="Chef plating a dish" />
        <img src={chef2} alt="Restaurant team in the kitchen" />
      </div>
    </section>
  );
}
