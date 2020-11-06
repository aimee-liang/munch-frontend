import React from "react"



const Header = () => {
    return <header className="header">
      {/* logo, navigation bar, whatever.  */}
      <img className="logo" src="images/munch-logo.png" alt="munch logo"/>
      <button
          type="button"
          className="btn"
        >
          button
        </button>
      this is the header
    </header>
}

export default Header