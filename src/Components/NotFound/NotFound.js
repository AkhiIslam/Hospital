import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="text-danger text-center my-5">
            <h1>404</h1>
            <h3>Sorry, Page not Found</h3>
            <br />
            <Link to="home" class="fw-bold text-decoration-none">Back To Home</Link>
        </div>
    );
};

export default NotFound;