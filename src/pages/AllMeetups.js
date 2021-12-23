import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
    {
      id: 'm1',
      title: 'This is İstanbul meetup',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Istanbul_siluet.jpg/1280px-Istanbul_siluet.jpg',
      address: 'Meetupstreet 5, 12345 İstanbul City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
    {
      id: 'm2',
      title: 'This is İzmir meetup',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Izmir_Konak_Square.jpg/1280px-Izmir_Konak_Square.jpg',
      address: 'Meetupstreet 5, 12345 İzmir City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
  ];

function AllMeetupsPage() {
    return <section>
        <h1>All Meetups</h1>
        <MeetupList meetups={DUMMY_DATA} />
        </section>;
}

export default AllMeetupsPage;