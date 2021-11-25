import React from 'react';
import '../Service/Service.css';

const Team = ({ team }) => {
    const { name, expert, experience, age, img } = team;
    return (
        <div>
            <div className="item text-white">
                <img className="size" src={img} alt="" />

                <h3>Name: {name}</h3>
                <h5>Expert: {expert}</h5>
                <h6>Experience: {experience}</h6>
                <p>Age: {age}</p>

            </div>
        </div>
    );
};

export default Team;