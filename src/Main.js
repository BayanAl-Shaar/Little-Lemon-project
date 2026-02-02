import { Routes, Route, useNavigate } from "react-router-dom";
import { useReducer } from "react";
import HomePage from "./components/HomePage";
import BookingPage from "./components/BookingPage";
import ConfirmedBooking from "./ConfirmedBooking";
import { initializeTimes, updateTimes } from "./timesReducer";
import { submitAPI } from "./api";

export default function Main() {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  const navigate = useNavigate();

  const submitForm = (formData) => {
    const success = submitAPI(formData);

    if (success) {
      // Write the booking to local storage so it persists
      localStorage.setItem("bookings", JSON.stringify(formData));
      // Navigate to the confirmation page
      navigate("/confirmed");
    }
  };

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
}