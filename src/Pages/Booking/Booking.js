import React from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceid } = useParams();

    

    return (
        <div>
            <h2>this is Booking: {serviceid}</h2>
        </div>
    );
};

export default Booking;