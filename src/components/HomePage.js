// src/components/HomePage.js
import CallToAction from "./sections/CallToAction";
import Specials from "./sections/Specials";
import CustomersSay from "./sections/CustomersSay";
import Chicago from "./sections/Chicago";

export default function HomePage() {
  return (
    <>
      <CallToAction />
      <Specials />
      <CustomersSay />
      <Chicago />
    </>
  );
}
