// src/components/sections/CustomersSay.js
const testimonials = [
  { id: 1, name: "Nora K.", city: "Chicago", stars: 5, text: "Amazing flavors and super friendly staff." },
  { id: 2, name: "Liam R.", city: "Evanston", stars: 4, text: "The bruschetta is a must-try!" },
  { id: 3, name: "Ava S.",  city: "Oak Park", stars: 5, text: "Great atmosphere and quick service." },
  { id: 4, name: "Mason D.",city: "Logan Square", stars: 4, text: "Loved the lemon dessert." }
];

export default function CustomersSay() {
  return (
    <section className="container testimonials">
      <h2 className="mb-2">Testimonials</h2>
      <div className="testimonial-grid">
        {testimonials.map(t => (
          <article className="testimonial" key={t.id}>
            <div className="stars">{"★".repeat(t.stars)}{"☆".repeat(5 - t.stars)}</div>
            <div className="person">
              <div className="avatar" aria-hidden="true">{t.name[0]}</div>
              <div>
                <strong>{t.name}</strong>
                <div className="muted">{t.city}</div>
              </div>
            </div>
            <p>{t.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
