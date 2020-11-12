import React from "react"

const AboutMe = (props) => {

    let user = props.user
    

    return(
        <>
            <div className="about-me-container">

            <h4>About Me:</h4>
            <>{console.log("In About Me, user is:", user)}</>
        { user ? <p>Munchie Name: @{user.username}</p> : null}
        { user ?<p>Contact Me: {user.email}</p> : null}
        { user ? <p>Bio: {user.bio}</p> : <p>This user did not provide a profile</p> }
                    
                    
            
            </div>
        </>
    
    )
}
export default AboutMe