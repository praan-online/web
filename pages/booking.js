import React from 'react';

export default function Booking({ booking }) {
  return (
    <div>
      <h1 className="bg-[url('/img/hpic.jpg')] flex flex-row items-center justify-center py-36" >Booking Details</h1>
      <p>Name: {booking.name}</p>
      <p>Date: {booking.date}</p>
      <p>Service: {booking.service}</p>
      <p>Price: {booking.price}</p>
      <p>Price: {booking.price}</p>
    </div>
  );
}

export async function getServerSideProps(context) {
  const booking = {
    name: 'John Doe',
    date: '2023-05-15',
    service: 'Massage',
    price: '$50',
  };
  return {
    props: {
      booking,
    },
  };
}
