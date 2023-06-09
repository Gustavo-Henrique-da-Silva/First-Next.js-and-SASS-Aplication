import Image from 'next/image';
import Link from 'next/link';

export default function EventsPerLocation({ data, pageName }) {
  return (
    <div className="cat_events">
      <h1> Events in {pageName.charAt(0).toUpperCase() + pageName.slice(1)}</h1>

      <div className="content">
        {data.map((ev) => (
          <Link
            key={ev.id}
            href={`/events/${ev.city}/${ev.id}`}
            passHref
            legacyBehavior
          >
            <a className="card">
              <Image width={300} alt={ev.title} height={300} src={ev.image} />
              <h2> {ev.title} </h2> <p> {ev.description}</p>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
