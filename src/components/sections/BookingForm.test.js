import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BookingForm from './BookingForm';

const mockAvailableTimes = ['17:00', '18:00', '19:00'];
const mockDispatch = jest.fn();
const mockSubmitForm = jest.fn();

describe('BookingForm', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders all form fields with correct HTML5 validation attributes', () => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );

    // Date input
    const dateInput = screen.getByLabelText(/choose date/i);
    expect(dateInput).toHaveAttribute('type', 'date');
    expect(dateInput).toHaveAttribute('required');
    expect(dateInput).toHaveAttribute('min');

    // Time select
    const timeSelect = screen.getByLabelText(/choose time/i);
    expect(timeSelect).toHaveAttribute('required');

    // Guests input
    const guestsInput = screen.getByLabelText(/number of guests/i);
    expect(guestsInput).toHaveAttribute('type', 'number');
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');
    expect(guestsInput).toHaveAttribute('required');

    // Occasion select
    const occasionSelect = screen.getByLabelText(/occasion/i);
    expect(occasionSelect).toHaveAttribute('required');

    // Submit button
    const submitButton = screen.getByRole('button', { name: /make your reservation/i });
    expect(submitButton).toBeInTheDocument();
  });

  describe('Date validation', () => {
    test('shows error for empty date on focus', async () => {
      render(
        <BookingForm
          availableTimes={mockAvailableTimes}
          dispatch={mockDispatch}
          submitForm={mockSubmitForm}
        />
      );

      const dateInput = screen.getByLabelText(/choose date/i);
      await userEvent.click(dateInput);
      await userEvent.tab(); // Move focus away

      expect(screen.getByText('Date is required.')).toBeInTheDocument();
    });

    test('shows error for past date', async () => {
      render(
        <BookingForm
          availableTimes={mockAvailableTimes}
          dispatch={mockDispatch}
          submitForm={mockSubmitForm}
        />
      );

      const dateInput = screen.getByLabelText(/choose date/i);
      const pastDate = '2020-01-01';
      await userEvent.type(dateInput, pastDate);

      expect(screen.getByText('Date cannot be in the past.')).toBeInTheDocument();
    });

    test('accepts valid future date', async () => {
      render(
        <BookingForm
          availableTimes={mockAvailableTimes}
          dispatch={mockDispatch}
          submitForm={mockSubmitForm}
        />
      );

      const dateInput = screen.getByLabelText(/choose date/i);
      const futureDate = '2025-12-31';
      fireEvent.change(dateInput, { target: { value: futureDate } });

      expect(screen.queryByText('Date is required.')).not.toBeInTheDocument();
      expect(screen.queryByText('Date cannot be in the past.')).not.toBeInTheDocument();
    });
  });

  describe('Time validation', () => {
    test('shows error for empty time on focus', async () => {
      render(
        <BookingForm
          availableTimes={mockAvailableTimes}
          dispatch={mockDispatch}
          submitForm={mockSubmitForm}
        />
      );

      const timeSelect = screen.getByLabelText(/choose time/i);
      await userEvent.click(timeSelect);
      await userEvent.tab();

      expect(screen.getByText('Time is required.')).toBeInTheDocument();
    });

    test('accepts valid time selection', async () => {
      render(
        <BookingForm
          availableTimes={mockAvailableTimes}
          dispatch={mockDispatch}
          submitForm={mockSubmitForm}
        />
      );

      const timeSelect = screen.getByLabelText(/choose time/i);
      await userEvent.selectOptions(timeSelect, '17:00');

      expect(screen.queryByText('Time is required.')).not.toBeInTheDocument();
    });
  });

  describe('Guests validation', () => {
    test('shows error for guests less than 1', async () => {
      render(
        <BookingForm
          availableTimes={mockAvailableTimes}
          dispatch={mockDispatch}
          submitForm={mockSubmitForm}
        />
      );

      const guestsInput = screen.getByLabelText(/number of guests/i);
      await userEvent.clear(guestsInput);
      await userEvent.type(guestsInput, '0');

      expect(screen.getByText('Number of guests must be at least 1.')).toBeInTheDocument();
    });

    test('shows error for guests more than 10', async () => {
      render(
        <BookingForm
          availableTimes={mockAvailableTimes}
          dispatch={mockDispatch}
          submitForm={mockSubmitForm}
        />
      );

      const guestsInput = screen.getByLabelText(/number of guests/i);
      await userEvent.clear(guestsInput);
      await userEvent.type(guestsInput, '11');

      expect(screen.getByText('Number of guests cannot exceed 10.')).toBeInTheDocument();
    });

    test('accepts valid guest number', async () => {
      render(
        <BookingForm
          availableTimes={mockAvailableTimes}
          dispatch={mockDispatch}
          submitForm={mockSubmitForm}
        />
      );

      const guestsInput = screen.getByLabelText(/number of guests/i);
      await userEvent.clear(guestsInput);
      await userEvent.type(guestsInput, '5');

      expect(screen.queryByText(/guests must be at least 1/i)).not.toBeInTheDocument();
      expect(screen.queryByText(/guests cannot exceed 10/i)).not.toBeInTheDocument();
    });

    test('shows error for empty guests field', async () => {
      render(
        <BookingForm
          availableTimes={mockAvailableTimes}
          dispatch={mockDispatch}
          submitForm={mockSubmitForm}
        />
      );

      const guestsInput = screen.getByLabelText(/number of guests/i);
      await userEvent.click(guestsInput);
      await userEvent.tab();

      expect(screen.getByText('Number of guests must be at least 1.')).toBeInTheDocument();
    });
  });

  describe('Occasion validation', () => {
    test('shows error for empty occasion on focus', async () => {
      render(
        <BookingForm
          availableTimes={mockAvailableTimes}
          dispatch={mockDispatch}
          submitForm={mockSubmitForm}
        />
      );

      const occasionSelect = screen.getByLabelText(/occasion/i);
      await userEvent.click(occasionSelect);
      await userEvent.tab();

      expect(screen.getByText('Occasion is required.')).toBeInTheDocument();
    });

    test('accepts valid occasion selection', async () => {
      render(
        <BookingForm
          availableTimes={mockAvailableTimes}
          dispatch={mockDispatch}
          submitForm={mockSubmitForm}
        />
      );

      const occasionSelect = screen.getByLabelText(/occasion/i);
      await userEvent.selectOptions(occasionSelect, 'Birthday');

      expect(screen.queryByText('Occasion is required.')).not.toBeInTheDocument();
    });
  });

  describe('Form submission', () => {
    test('submits form with valid data', async () => {
      render(
        <BookingForm
          availableTimes={mockAvailableTimes}
          dispatch={mockDispatch}
          submitForm={mockSubmitForm}
        />
      );

      const dateInput = screen.getByLabelText(/choose date/i);
      const timeSelect = screen.getByLabelText(/choose time/i);
      const guestsInput = screen.getByLabelText(/number of guests/i);
      const occasionSelect = screen.getByLabelText(/occasion/i);
      const submitButton = screen.getByRole('button', { name: /make your reservation/i });

      await userEvent.type(dateInput, '2026-12-31');
      await userEvent.selectOptions(timeSelect, '17:00');
      await userEvent.clear(guestsInput);
      await userEvent.type(guestsInput, '4');
      await userEvent.selectOptions(occasionSelect, 'Birthday');

      await waitFor(() => expect(submitButton).not.toBeDisabled());

      await userEvent.click(submitButton);

      expect(mockSubmitForm).toHaveBeenCalledWith({
        date: '2026-12-31',
        time: '17:00',
        guests: 4,
        occasion: 'Birthday'
      });
    });

    test('does not submit form with invalid data', async () => {
      render(
        <BookingForm
          availableTimes={mockAvailableTimes}
          dispatch={mockDispatch}
          submitForm={mockSubmitForm}
        />
      );

      const submitButton = screen.getByRole('button', { name: /make your reservation/i });
      await userEvent.click(submitButton);

      expect(mockSubmitForm).not.toHaveBeenCalled();
    });

    test('submit button is disabled when form has errors', () => {
      render(
        <BookingForm
          availableTimes={mockAvailableTimes}
          dispatch={mockDispatch}
          submitForm={mockSubmitForm}
        />
      );

      const submitButton = screen.getByRole('button', { name: /make your reservation/i });
      expect(submitButton).toBeDisabled();
    });
  });
});
