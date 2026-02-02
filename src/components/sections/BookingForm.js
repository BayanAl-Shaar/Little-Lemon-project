import { useState } from "react";

export default function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    dispatch({ type: "UPDATE_TIMES", date: newDate });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // STEP 2: Call the submitForm function with the object data
    submitForm({ date, time, guests, occasion });
  };

  return (
    <form
      className="booking-form"
      onSubmit={handleSubmit}
      style={{ display: "grid", maxWidth: "200px", gap: "20px", margin: "0 auto" }}
      aria-label="Table booking form"
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
        required
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      >
        <option value="" disabled>Select a time</option>
        {availableTimes.map((t) => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => setGuests(Number(e.target.value))}
        required
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
        <option>Other</option>
      </select>

      <input 
        className="btn btn--primary" 
        type="submit" 
        value="Make Your Reservation" 
        disabled={!date || !time}
        aria-label="On Click"
      />
    </form>
  );
}