import Navbar from "./Navbar"
import React from "react"

const Header = (props) => {
    return (
    <header className="header">
        <img className="logo" src="images/munch-logo.png" alt="munch logo"/>
        <Navbar user={props.user}/>
    </header>
    )
}

export default Header