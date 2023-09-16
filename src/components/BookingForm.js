import React from "react";
import { useState } from "react";

const BookingForm = (props) => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occassion, setOccassion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.SubmitForm(e);
    }
    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    }
    return (
        <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div>
                            <label htmlFor="book-date">Choose Date</label>
                            <input id="book-date" value={date} onChange={(e) => handleChange(e.target.value)} type="date" required/>
                        </div>
                        <div>
                            <label htmlFor="booking-time">Choose Time</label>
                            <select id="book-time" value={time} onChange={(e) => setTime(e.target.value)}>
                                <option value="">Select a Time</option>
                                {
                                    props.availableTime.availableTime.map(availableTime => {return <option key={availableTime}>{availableTime}</option>})
                                }

                            </select>
                        </div>

                        <div>
                            <label htmlFor="booking-guests">Number of Guests</label>
                            <input id="book-guests" min= "1" value={guests} onChange={(e) => setGuests(e.target.value)}/>
                        </div>

                        <div>
                            <label htmlFor="book-occassion">occassion</label>
                            <select id="book-occassion" key={occassion} value={occassion} onChange={e => setOccassion(e.target.value)}>
                                <option>Birthday</option>
                                <option>Anniversary</option>
                            </select>
                        </div>

                        <div className="btnRecieve">
                            <input aria-label="On Click" type="submit" value={"Make Your Reservation"}/>
                        </div>
                    </fieldset>                    
                </form>
            </section>
        </header>
    )
};

export default BookingForm;