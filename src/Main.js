import { Routes, Route, useNavigate } from "react-router-dom";
import { useReducer } from "react";
import HomePage from "./components/HomePage";
import BookingPage from "./components/BookingPage";
import ConfirmedBooking from "./ConfirmedBooking";
import { initializeTimes, updateTimes } from "./timesReducer";
import { submitAPI } from "./api";

const submitForm = (formData, navigate) => {
  const success = submitAPI(formData);

  if (success) {
    // Write the booking to local storage so it persists
    localStorage.setItem("bookings", JSON.stringify(formData));
    // Navigate to the confirmation page
    navigate("/confirmed");
  }
};

export { submitForm };

export default function Main() {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  const navigate = useNavigate();

  const handleSubmitForm = (formData) => {
    submitForm(formData, navigate);
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
              submitForm={handleSubmitForm}
            />
          }
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
}
