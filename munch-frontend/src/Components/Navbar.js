import React from "react"
import { NavLink } from "react-router-dom"
import {Nav} from "react-bootstrap"

class Navbar extends React.Component{
    render(){
    return(
        <>

        <Nav className="justify-content-end" variant="pills" activeKey="/home">
            
        {this.props.user ? 
        <>
            <Nav.Item>
                <Nav.Link className="pill" to="/restaurants">Hi, @{this.props.user.username}</Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link className="pill" to="/restaurants"> Search Restaurants</Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link className="pill" to="/profile"> View Profile </Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link className="pill" to="/login">
                    <li onClick={()=> this.props.logMeOut()}> Log Out</li>
                </Nav.Link>
            </Nav.Item>
        </>
        :
        <>
            <Nav.Item>
                <Nav.Link className="pill" to="/signup">Create an Account</Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link className="pill" to="/login">Login</Nav.Link>
            </Nav.Item>
        </>
        }

    </Nav>
    </>
    )}
}

export default Navbar