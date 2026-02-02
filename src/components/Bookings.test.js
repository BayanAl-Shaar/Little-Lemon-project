import { render, screen } from "@testing-library/react";
import BookingPage from "./BookingPage";

test("renders the BookingPage heading", () => {
  // We create a mock array of times so the component has data to work with
  const mockTimes = ["17:00", "18:00"];

  render(
    <BookingPage
      availableTimes={mockTimes}
      dispatch={() => {}}
      submitForm={() => {}}
    />
  );

  // Updated the text to match what is actually in your BookingPage.js
  const headingElement = screen.getByText("Reserve a Table");
  expect(headingElement).toBeInTheDocument();
});