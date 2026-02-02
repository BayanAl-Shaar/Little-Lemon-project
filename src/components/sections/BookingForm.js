import { useState, useEffect } from "react";

export default function BookingForm({ availableTimes, dispatch, submitForm }) {
  const today = new Date().toISOString().split('T')[0];
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(0);
  const [occasion, setOccasion] = useState("");
  const [errors, setErrors] = useState({});
  const [hasInteractedDate, setHasInteractedDate] = useState(false);
  const [hasInteractedTime, setHasInteractedTime] = useState(false);
  const [hasInteractedGuests, setHasInteractedGuests] = useState(false);
  const [hasInteractedOccasion, setHasInteractedOccasion] = useState(false);

  useEffect(() => {
    const initialErrors = {
      date: validateField("date", date),
      time: validateField("time", time),
      guests: validateField("guests", guests),
      occasion: validateField("occasion", occasion),
    };
    setErrors(initialErrors);
  }, []);

  const validateField = (name, value) => {
    let error = "";
    switch (name) {
      case "date":
        if (!value) error = "Date is required.";
        else if (value < today) error = "Date cannot be in the past.";
        break;
      case "time":
        if (!value) error = "Time is required.";
        break;
      case "guests":
        if (!value || value < 1) error = "Number of guests must be at least 1.";
        else if (value > 10) error = "Number of guests cannot exceed 10.";
        break;
      case "occasion":
        if (!value) error = "Occasion is required.";
        break;
      default:
        break;
    }
    return error;
  };

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    const error = validateField("date", newDate);
    setErrors(prev => ({ ...prev, date: error }));
    dispatch({ type: "UPDATE_TIMES", date: newDate });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = {
      date: validateField("date", date),
      time: validateField("time", time),
      guests: validateField("guests", guests),
      occasion: validateField("occasion", occasion),
    };
    setErrors(formErrors);
    if (Object.values(formErrors).every(error => !error)) {
      submitForm({ date, time, guests, occasion });
    }
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
        onFocus={() => setHasInteractedDate(true)}
        min={today}
        required
        aria-describedby="date-error"
      />
      {hasInteractedDate && errors.date && <div id="date-error" role="alert" style={{ color: 'red' }}>{errors.date}</div>}

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => {
          setTime(e.target.value);
          const error = validateField("time", e.target.value);
          setErrors(prev => ({ ...prev, time: error }));
        }}
        onFocus={() => setHasInteractedTime(true)}
        required
        aria-describedby="time-error"
      >
        <option value="" disabled>Select a time</option>
        {availableTimes.map((t) => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>
      {hasInteractedTime && errors.time && <div id="time-error" role="alert" style={{ color: 'red' }}>{errors.time}</div>}

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => {
          setGuests(Number(e.target.value));
          const error = validateField("guests", Number(e.target.value));
          setErrors(prev => ({ ...prev, guests: error }));
        }}
        onFocus={() => setHasInteractedGuests(true)}
        required
        aria-describedby="guests-error"
      />
      {hasInteractedGuests && errors.guests && <div id="guests-error" role="alert" style={{ color: 'red' }}>{errors.guests}</div>}

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => {
          setOccasion(e.target.value);
          const error = validateField("occasion", e.target.value);
          setErrors(prev => ({ ...prev, occasion: error }));
        }}
        onFocus={() => setHasInteractedOccasion(true)}
        required
        aria-describedby="occasion-error"
      >
        <option>Birthday</option>
        <option>Anniversary</option>
        <option>Other</option>
      </select>
      {hasInteractedOccasion && errors.occasion && <span id="occasion-error" style={{ color: 'red' }}>{errors.occasion}</span>}

      <input
        className="btn btn--primary"
        type="submit"
        value="Make Your Reservation"
        disabled={Object.values(errors).some(error => error) || !date || !time}
        style={{
          backgroundColor: (Object.values(errors).some(error => error) || !date || !time) ? '#ccc' : '#f4ce14',
          cursor: (Object.values(errors).some(error => error) || !date || !time) ? 'not-allowed' : 'pointer'
        }}

      />
    </form>
  );
}