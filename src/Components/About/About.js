import React, { useEffect, useState } from 'react';
import Team from '../Team/Team';
import '../Service/Service.css';

const About = () => {

    const [teams, setTeams] = useState([]);
    useEffect(() => {
        fetch('team.json')
            .then(res => res.json())
            .then(data => setTeams(data))
    }, [])

    return (
        <div>
            <h2 className="text-primary mt-5 text-center">Our Doctor's</h2>
            <div className="service-container">
                {
                    teams.map(team => <Team
                        key={team.id}
                        team={team}
                    >

                    </Team>)
                }
            </div>
        </div>
    );
};

export default About;