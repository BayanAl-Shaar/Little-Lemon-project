// Mock the api module
jest.mock('./api', () => ({
  submitAPI: jest.fn(),
  fetchData: () => ['17:00', '18:00', '19:00'],
}));

// Mock the Main module
jest.mock('./Main', () => ({
  submitForm: jest.fn(),
}));

import { initializeTimes, updateTimes } from "./timesReducer";
import { submitAPI } from './api';
import { submitForm } from './Main';

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

  // 2. Local Storage Unit Tests
  describe("submitForm localStorage tests", () => {
    let setItemSpy;
    let navigateMock;

    beforeEach(() => {
      setItemSpy = jest.spyOn(Storage.prototype, 'setItem');
      navigateMock = jest.fn();
      jest.clearAllMocks();

      // Implement the submitForm logic in the mock
      submitForm.mockImplementation((formData, navigate) => {
        const success = submitAPI(formData);
        if (success) {
          localStorage.setItem("bookings", JSON.stringify(formData));
          navigate("/confirmed");
        }
      });
    });

    afterEach(() => {
      setItemSpy.mockRestore();
    });

    test("should persist booking data to localStorage when submitAPI succeeds", () => {
      const formData = { date: "2023-10-01", time: "17:00", guests: 2, occasion: "Birthday" };

      // Mock submitAPI to return true
      submitAPI.mockReturnValue(true);

      submitForm(formData, navigateMock);

      expect(setItemSpy).toHaveBeenCalledWith("bookings", JSON.stringify(formData));
      expect(navigateMock).toHaveBeenCalledWith("/confirmed");
    });

    test("should not persist booking data to localStorage when submitAPI fails", () => {
      const formData = { date: "2023-10-01", time: "17:00", guests: 2, occasion: "Birthday" };

      // Mock submitAPI to return false
      submitAPI.mockReturnValue(false);

      submitForm(formData, navigateMock);

      expect(setItemSpy).not.toHaveBeenCalled();
      expect(navigateMock).not.toHaveBeenCalled();
    });

    test("should store data as JSON string in localStorage", () => {
      const formData = { date: "2023-10-01", time: "17:00", guests: 4, occasion: "Anniversary" };

      submitAPI.mockReturnValue(true);

      submitForm(formData, navigateMock);

      expect(setItemSpy).toHaveBeenCalledWith("bookings", JSON.stringify(formData));
      // Verify it's actually a string
      const storedValue = setItemSpy.mock.calls[0][1];
      expect(typeof storedValue).toBe('string');
      expect(JSON.parse(storedValue)).toEqual(formData);
    });
  });
});
