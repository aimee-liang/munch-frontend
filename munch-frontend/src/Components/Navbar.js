import React from "react"
import { NavLink } from "react-router-dom"

function Navbar(){
    return(
        <ul>
            <NavLink to="/welcome">
                <li>Welcome</li>
            </NavLink>
            <NavLink to="/restaurants">
                <li>Search Restaurants</li>
            </NavLink>
            <NavLink to="/signup">
                <li>Create an Account</li>
            </NavLink>
            <NavLink to="/login">
                <li>Login</li>
            </NavLink>
        </ul>
    )
}

export default Navbar