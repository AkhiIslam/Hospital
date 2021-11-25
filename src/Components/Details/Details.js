import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import '../Service/Service.css';

const Details = () => {
    const [details, setDetails] = useState([])
    const [singleService, setSingleService] = useState({})
    const { serviceId } = useParams();
    useEffect(() => {
        fetch('/service.json')
            .then(res => res.json())
            .then(data => setDetails(data))
        // .then(data => console.log(data))

    }, [])
    useEffect(() => {
        const foundServices = details.find(detail => detail.id == serviceId)
        setSingleService(foundServices)
    }, [details])


    return (

        <div>
            <h2 className="text-primary my-5 text-center">Services Details</h2>
            <div className="item" style={{ width: '400px', margin: 'auto' }}>

                <img className="size " src={singleService?.img} alt="" />
                <h2 className="text-white">{singleService?.name}</h2>
                <h3>{singleService?.price}</h3>
                <h4> {singleService?.description}</h4>

                <button className="btn btn-primary">Booking</button>

            </div>
        </div>

    );
};

export default Details;