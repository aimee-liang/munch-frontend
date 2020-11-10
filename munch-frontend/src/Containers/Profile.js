import React from "react"
import Reservations from "./Reservations"
import Reviews from "./Reviews"

export default class Profile extends React.Component{

    state={
        reservations: [] //each user will have an array of reservations, which will then be mapped and cards created
    }

    render(){
        return(
            <>
            
            <Reservations />
            <Reviews />
            </>
        )
    }
}