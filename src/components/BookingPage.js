import BookingForm from "./sections/BookingForm";

export default function BookingPage({ availableTimes, dispatch, submitForm }) {
  // We removed the local table state because the app 
  // navigates to ConfirmedBooking.js upon submission.

  return (
    <section
      className="container"
      style={{ padding: "3rem 0" }}
      aria-labelledby="booking-heading"
    >
      <h2 id="booking-heading" style={{textAlign: "center", marginBottom: "2rem"}}>
        Reserve a Table
      </h2>

      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </section>
  );
}