import React from "react"

const AboutMe = props => {

    return(
        <>
        <p>{console.log(props.user)}</p>
        <h4>Munchie Name: @{props.user.username}</h4>
        <h4>Contact Me: {props.user.email}</h4>
        <p>{props.user.bio === null ? 
                "This user did not provide a profile"
                : props.user.bio}</p>
        </>
    )
}

export default AboutMe