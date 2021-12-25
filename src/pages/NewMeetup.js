import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useNavigate } from 'react-router-dom';

function NewMeetupPage() {
    const navigate = useNavigate();
    function addNewMeetupHandler(meetup) {
        fetch(
            'https://dev001.na-dev-engine.altogic.com/e:61c6266a49b7b99f76f2fb95/meetup',
            {
                method: 'POST',
                body: JSON.stringify(meetup),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            navigate('/');
        });
    }

    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddNewMeetup={addNewMeetupHandler} />
        </section>
    );
}

export default NewMeetupPage;