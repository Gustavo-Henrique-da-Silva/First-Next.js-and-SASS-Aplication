import Image from 'next/image';
import Link from 'next/link';

export default function homePage({ data }) {
  return (
    <main className="home_body">
      {data?.map((ev) => (
        <Link key={ev.id} href={`/events/${ev.id}`} passHref legacyBehavior>
          <a className="card" href={`/events/${ev.id}`}>
            {' '}
            <div className="image">
              <Image width={200} alt={ev.title} height={100} src={ev.image} />
            </div>
            <div className="content">
              <h2> {ev.title} </h2> <p> {ev.description}</p>
            </div>
          </a>
        </Link>
      ))}
    </main>
  );
}
