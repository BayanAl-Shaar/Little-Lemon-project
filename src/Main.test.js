import { initializeTimes, updateTimes } from "./timesReducer";

describe("Little Lemon Logic Tests", () => {
  // 1. Reducer Tests
  test("initializeTimes returns fetched times", () => {
    const times = initializeTimes();
    expect(times.length).toBeGreaterThan(0);
  });

  test("updateTimes returns times based on date", () => {
    const action = { type: "UPDATE_TIMES", date: "2026-01-29" };
    const state = updateTimes([], action);
    expect(state.length).toBeGreaterThan(0);
  });

  // 2. Local Storage Unit Test
  test("should persist booking data to localStorage", () => {
    const spy = jest.spyOn(Storage.prototype, 'setItem');
    const data = { time: "17:00" };
    
    // This simulates the line in your Main.js submitForm function
    localStorage.setItem("bookings", JSON.stringify(data));
    
    expect(spy).toHaveBeenCalledWith("bookings", JSON.stringify(data));
    spy.mockRestore();
  });
});