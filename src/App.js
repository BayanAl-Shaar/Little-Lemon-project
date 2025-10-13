// src/App.js
import "./App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

export default function App() {
  return (
    <>
      <Header />     {/* <- Nav is already inside Header */}
      <Main />
      <Footer />
    </>
  );
}
