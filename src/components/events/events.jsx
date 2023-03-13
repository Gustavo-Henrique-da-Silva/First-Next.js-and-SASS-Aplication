import Image from 'next/image';
import Link from 'next/link';

export default function Events({ data }) {
  return (
    <div className="events_page">
      <h1> Event Page </h1>
      <div>
        {data.map((ev) => (
          <Link key={ev.id} href={`/events/${ev.id}`} passHref legacyBehavior>
            <a className="card">
              <Image width={300} alt={ev.title} height={300} src={ev.image} />
              <h2> {ev.title} </h2>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
