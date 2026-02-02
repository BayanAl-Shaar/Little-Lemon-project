// src/App.js
import "./App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
  );
}
