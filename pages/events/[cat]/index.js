import EventsLocation from '../../../src/components/eventsPerLocation/eventsPerLocation';
const EventsCatPage = ({ data, pageName }) => {
  // image https://wembleypark.com/media/images/KISS-HHP-42-1440x810-Logos-Date-de.2e16d0ba.fill-496x279.jpg is not running
  return <EventsLocation data={data} pageName={pageName} />;
};

export default EventsCatPage;

export async function getStaticPaths() {
  const { events_categories } = await import('/data/data.json');
  const allPaths = events_categories.map((ev) => {
    return {
      params: {
        cat: ev.id.toString(),
      },
    };
  });

  console.log(allPaths);
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  console.log(context);
  const id = context?.params.cat;
  console.log(id);
  const { allEvents } = await import('/data/data.json');

  const data = allEvents.filter((ev) => ev.city === id);
  console.log(data);

  return { props: { data, pageName: id } };
}
