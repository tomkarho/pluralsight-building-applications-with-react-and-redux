import React from 'react';
import {NavLink} from "react-router-dom";

function NotFound() {
    return (
        <>
            <p>The page you are looking for cannot be found</p>
            <p>Try going back to <NavLink to='/'>home</NavLink></p>
        </>
    );
}

export default NotFound;
