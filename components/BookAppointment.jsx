import { useState } from 'react';

function BookAppointment() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('/api/book-appointment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, date }),
    });

    if (response.ok) {
      console.log('Appointment booked!');
    } else {
      console.error('Error booking appointment:', await response.text());
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        type="date"
        placeholder="Date"
        value={date}
        onChange={(event) => setDate(event.target.value)}
      />
      <button type="submit">Book Appointment</button>
    </form>
  );
}

export default BookAppointment;