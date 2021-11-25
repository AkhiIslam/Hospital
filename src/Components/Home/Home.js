import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import Slider from '../Slider/Slider';
import './Home.css'
import '../Service/Service.css'

const Home = () => {

    const [services, setServices] = useState([]);


    useEffect(() => {
        fetch('./service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (

        <div>

            <div>
                <Slider></Slider>
            </div>

            <div>
            
                <h1 className="text-center text-primary my-3">Our Services</h1>

            </div>

            <div className="service-container">
                {
                    services.map(service => <Service
                        key={service.key}
                        service={service}
                    >

                    </Service>)
                }
            </div>

        </div>
    );
};

export default Home;
