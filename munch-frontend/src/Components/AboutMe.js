import React from "react"

const AboutMe = props => {

    return(
        <>
        <p>{console.log(props.user)}</p>
        <p>Munchie Name: @{props.user.username}</p>
        <p>Contact Me: {props.user.email}</p>

        </>
    )
}

export default AboutMe