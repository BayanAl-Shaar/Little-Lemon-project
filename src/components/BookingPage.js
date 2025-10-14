// src/components/BookingPage.js
export default function BookingPage() {
  return (
    <main className="container" style={{ padding: "2.5rem 0" }}>
      <h2>Reserve a Table</h2>
      <p className="muted">Pick a date and time and we’ll hold your spot.</p>

      <form className="booking-form">
        <label>
          Date
          <input type="date" required />
        </label>

        <label>
          Time
          <input type="time" required />
        </label>

        <label>
          Guests
          <input type="number" min="1" max="10" defaultValue="2" required />
        </label>

        <button className="btn" type="submit">Book now</button>
      </form>
    </main>
  );
}
