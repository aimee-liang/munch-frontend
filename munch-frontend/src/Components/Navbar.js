import React from "react"
// import { NavLink } from "react-router-dom"
import {Nav} from "react-bootstrap"
import {FaSearch, FaPortrait, FaSignOutAlt, FaEllo, FaUserPlus, FaSignInAlt} from "react-icons/fa"

class Navbar extends React.Component{
    render(){
    return(
        <>

        <Nav className="justify-content-end" defaultActiveKey="/home">
            
        {this.props.user ? 
        <>
            <Nav.Item>
                <Nav.Link className="pill" href="/restaurants"><FaEllo/> Hi, @{this.props.user.username}</Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link className="pill" href="/restaurants"><FaSearch/> Search Restaurants</Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link className="pill" href="/profile"><FaPortrait/> View Profile</Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link className="pill" href="/login">
                    <li onClick={()=> this.props.logMeOut()}><FaSignOutAlt/> Log Out</li>
                </Nav.Link>
            </Nav.Item>
        </>
        :
        <>
            <Nav.Item>
                <Nav.Link className="pill" href="/signup"><FaUserPlus/> Create an Account</Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link className="pill" href="/login"><FaSignInAlt/> Login</Nav.Link>
            </Nav.Item>
        </>
        }

    </Nav>
    </>
    )}
}

export default Navbar