import React from "react"
import { NavLink } from "react-router-dom"

class Navbar extends React.Component{
    render(){
    return(
        <>
        {this.props.user ? 
        <ul>
            <NavLink to="/welcome">
                <li>Welcome</li>
            </NavLink>
            <NavLink to="/restaurants">
                <li>Search Restaurants</li> 
            </NavLink>
            <NavLink to="/profile">
                <li>View Profile</li>
            </NavLink>
            <NavLink to="/login">
                <li onClick={()=> this.props.logMeOut()}>Log Out</li>
            </NavLink>
        </ul>
        :
        <ul>
            <NavLink to="/signup">
                <li>Create an Account</li>
            </NavLink>
            <NavLink to="/login">
                <li>Login</li>
            </NavLink>
        </ul>
    }
    </>
    )}
}

export default Navbar