import React from "react"
import Reservations from "./Reservations"
import Reviews from "./Reviews"
import AboutMe from "../Components/AboutMe"

export default class Profile extends React.Component{

    // state={
    //     reservations: [] //each user will have an array of reservations, which will then be mapped and cards created
    // }

    render(){
        return(
            <>
            <AboutMe user={this.props.user}/>
            <Reservations />
            <Reviews user={this.props.user}/>
            </>
        )
    }
}