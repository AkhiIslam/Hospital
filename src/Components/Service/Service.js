import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { id, name, description, img } = props.service;
    return (
        <div className="item">

            <img className="size " src={img} alt="" />
            <h2 className="text-white">{name}</h2>
            <h4> {description}</h4>

            <Link to={`/service/${id}`}>
                <button className="btn btn-primary mb-2">Details</button>
            </Link>

        </div>
    );
};

export default Service;