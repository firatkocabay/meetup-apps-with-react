import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from 'react';

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [meetupData, setMeetupData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://dev001.na-dev-engine.altogic.com/e:61c6266a49b7b99f76f2fb95/meetup'
      ).then((response) => {
        return response.json();
      }).then((data) => {
        const meetups = data.result;
        setIsLoading(false);
        setMeetupData(meetups);
      });
  }, []);


  if (isLoading) {
    return (
      <section>
        <h3>Loading...</h3>
      </section>
    );
  }
    return (
      <section>
        <h1>All Meetups</h1>
        <MeetupList meetups={meetupData} />
      </section>
    );
}

export default AllMeetupsPage;