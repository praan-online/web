import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to our Booking Page!</h1>
      <p>
        <Link href="/booking">
          <a>View Booking Details</a>
        </Link>
      </p>
    </div>
  );
}
