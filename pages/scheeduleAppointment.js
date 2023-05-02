import React, { useState } from 'react';

export default function ScheduleAppointment() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Code to submit appointment details to the server
  };

  return (
    <div>
      <h1>Schedule an Appointment</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label><br></br>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Date:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </label>
        <label>
          Time:
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
        </label>
        <button className=' rounded-md bg-teal-500 block w-20 mt-9 drop-shadow-lg text-center'type="submit">Submit</button>
      </form>
    </div>
  );
}
