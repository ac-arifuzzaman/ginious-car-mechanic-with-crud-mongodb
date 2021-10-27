import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    console.log(serviceId)
    const [service, setService] = useState({});
    useEffect(() => {
        fetch(`https://stormy-brook-94298.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div>
            <h1>This si {service.Name}</h1>
            <h2>this is booking: {serviceId}</h2>
            <p>{service.description}</p>
        </div>
    );
};

export default Booking;