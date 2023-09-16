import React from "react";
import BookingForm from "./BookingForm";

const Booking = (props) => {
    return (
        <BookingForm availableTime={props.availableTime} dispatch={props.dispatch} submitForm={props.submitForm}/>
    );
};

export default Booking;