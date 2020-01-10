import React from 'react';
import {Link} from "react-router-dom";

function HomePage() {
    return (
        <div className='jumbotron'>
            <h1>Pluralsight Administration</h1>
            <p>React, Redux and Reacr Router for ultra-responsive we b apps.</p>

            <Link to='about' className='btn btn-primary btn-large'>Learn more</Link>
        </div>
    );
}

export default HomePage;
