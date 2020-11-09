import Navbar from "./Navbar"
import React from "react"

const Header = () => {
    return (
    <header className="header">
        <img className="logo" src="images/munch-logo.png" alt="munch logo"/>
        <Navbar />
    </header>
    )
}

export default Header