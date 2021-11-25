import React, { useEffect, useState } from 'react';
import Disease from '../Disease/Disease';
import '../Service/Service.css';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <h2 className="text-primary mt-5 text-center">Our services</h2>
            <div className="service-container">
                {
                    services.map(service => <Disease
                        key={service.id}
                        service={service}
                    >

                    </Disease>)
                }
            </div>
        </div>
    );
};

export default Services;