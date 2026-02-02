// src/components/sections/Chicago.js
import chef1 from "../../assets/greek-salad.jpg";
import chef2 from "../../assets/lemon-dessert.jpg";

export default function Chicago() {
  return (
    <section className="container about" aria-labelledby="about-heading">
      <div className="about-text">
        <h2 id="about-heading">Little Lemon</h2>
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
        {/* swapped order */}
        <img className="photo photo-1" src={chef2} alt="Lemon dessert" />
        <img className="photo photo-2" src={chef1} alt="Greek salad" />
      </div>
    </section>
  );
}
