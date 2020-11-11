import React from "react"
import { NavLink } from "react-router-dom"
import {Nav} from "react-bootstrap"

class Navbar extends React.Component{
    render(){
    return(
        <>

        <Nav className="justify-content-end" defaultActiveKey="/home">
            
        {this.props.user ? 
        <>
            <Nav.Item>
                <Nav.Link className="pill" href="/restaurants">Hi, @{this.props.user.username}</Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link className="pill" href="/restaurants">Search Restaurants</Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link className="pill" href="/profile">View Profile</Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link className="pill" href="/login">
                    <li onClick={()=> this.props.logMeOut()}>Log Out</li>
                </Nav.Link>
            </Nav.Item>
        </>
        :
        <>
            <Nav.Item>
                <Nav.Link className="pill" href="/signup">Create an Account</Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link className="pill" href="/login">Login</Nav.Link>
            </Nav.Item>
        </>
        }

    </Nav>
    </>
    )}
}

export default Navbar