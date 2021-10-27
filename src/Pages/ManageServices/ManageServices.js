import React, { useEffect, useState } from 'react';

const ManageServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://stormy-brook-94298.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    const handleDelete = id => {
        const link = `https://stormy-brook-94298.herokuapp.com/services/${id}`
        fetch(link, {
            method: 'delete'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    alert('deleted')
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining)
                }
            })
    }
    return (
        <div>
            <h2>This is manage services</h2>
            {
                services.map(service => <div key={service._id}>
                    <h5>{service.Name}</h5>
                    <button onClick={() => handleDelete(service._id)}>Delete</button>
                </div>)
            }
        </div>
    );
};

export default ManageServices;