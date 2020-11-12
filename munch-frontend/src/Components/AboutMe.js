import React from "react"

const AboutMe = (props) => {

    let user = props.user

    return(
        <>
            <div className="about-me-container">

            <h4>About Me:</h4>
            <>{console.log("In About Me, user is:", user)}</>
            <p>Munchie Name: @{user.username}</p> 
            <p>Contact Me: {user.email}</p> 
            <p>{user.bio === null ? 
                    "This user did not provide a profile"
                    :
                    user.bio}
                </p>
            </div>
        </>
    
    )
}
export default AboutMe