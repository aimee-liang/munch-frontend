import React from "react"
import { NavLink } from "react-router-dom"
import {Nav} from "react-bootstrap"

class Navbar extends React.Component{
    render(){
    return(
        <>

        <Nav className="justify-content-end" activeKey="/home">
            
        {this.props.user ? 
        <>
            <Nav.Item>
                <Nav.Link to="/restaurants">Hi, @{this.props.user.username}</Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link to="/restaurants">Search Restaurants</Nav.Link>
                    {/* <li>Search Restaurants</li>  */}
            </Nav.Item>

            <Nav.Item>
                <Nav.Link to="/profile">View Profile</Nav.Link>
                    {/* <li>View Profile</li> */}
            </Nav.Item>

            <Nav.Item>
                <Nav.Link to="/login">
                    <li onClick={()=> this.props.logMeOut()}>Log Out</li>
                </Nav.Link>
            </Nav.Item>
        </>
        :
        <>
            <Nav.Item>
                <Nav.Link to="/signup">Create an Account</Nav.Link>
                    {/* Create an Account */}
            </Nav.Item>

            <Nav.Item>
                <Nav.Link to="/login">Login</Nav.Link>
                    {/* <li>Login</li> */}
            </Nav.Item>
        </>
        }

    </Nav>
    </>
    )}
}

export default Navbar