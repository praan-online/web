import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to our Laboratory Appointment Page!</h1>
      <p>
        <Link href="/schedule-appointment">
          <a>Schedule an Appointment</a>
        </Link>
      </p>
    </div>
  );
}
