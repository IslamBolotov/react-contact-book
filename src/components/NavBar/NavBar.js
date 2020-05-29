import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = ()=>{
    return(
        <div className="nav-bar">
            <ul>
                <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                <li><NavLink to="/add" activeClassName="active">Add</NavLink></li>
            </ul>
        </div>
    )
}

export default NavBar;