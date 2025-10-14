// src/Main.js
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import BookingPage from "./components/BookingPage";

function Placeholder({ title }) {
  return (
    <main className="container" style={{ padding: "2.5rem 0" }}>
      <h2>{title}</h2>
      <p>Coming soon…</p>
    </main>
  );
}

export default function Main() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/booking" element={<BookingPage />} />
      <Route path="/about" element={<Placeholder title="About" />} />
      <Route path="/menu" element={<Placeholder title="Menu" />} />
      <Route path="/order" element={<Placeholder title="Order Online" />} />
      <Route path="/login" element={<Placeholder title="Login" />} />
    </Routes>
  );
}
