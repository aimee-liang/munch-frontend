import React from "react"

const AboutMe = (props) => {

    let user = props.user

    return(
        <>
        <>{console.log("In About Me, user is:", user)}</>
        <p>Munchie Name: @{user.username}</p>
        {/* <p>Contact Me: {user.email}</p> */}
        {/* <p>{user.bio === null ? 
                "This user did not provide a profile"
                :
            user.bio}
        </p> */}
        </>
    )
}

export default AboutMe