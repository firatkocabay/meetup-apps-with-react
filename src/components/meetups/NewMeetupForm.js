import classes from './NewMeetupForm.module.css';
import Card from "../ui/Card";
import { useRef } from 'react';

function NewMeetupForm(props) {
    const titleInput = useRef();
    const imageInput = useRef();
    const addressInput = useRef();
    const descriptionInput = useRef();


    function submitHandler(event) {
        event.preventDefault();

        const currentTitle = titleInput.current.value;
        const currentImage = imageInput.current.value;
        const currentAddress = addressInput.current.value;
        const currentDescription = descriptionInput.current.value;

        const meetupData = {
            title: currentTitle,
            image: currentImage,
            address: currentAddress,
            description: currentDescription,
        };

        console.log(meetupData);
        props.onAddNewMeetup(meetupData);
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='title'>Meetup Title</label>
                    <input type='text' required id='title' ref={titleInput} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='image'>Meetup Image</label>
                    <input type='url' required id='image' ref={imageInput} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='address'>Address</label>
                    <input type='text' required id='address' ref={addressInput} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='description'>Description</label>
                    <textarea id='description' required rows='5' ref={descriptionInput}></textarea>
                </div>
                <div className={classes.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    );
}

export default NewMeetupForm;