import React from 'react';
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <nav>
            <NavLink exact to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/courses'>Courses</NavLink>
        </nav>
    );
}

export default Header;
