import React from "react"
import Header from "../Components/Header"
import Reservations from "./Reservations"

export default class Profile extends React.Component{

    state={
        reservations: [] //each user will have an array of reservations, which will then be mapped and cards created
    }

    render(){
        return(
            <>
            <Header/>
            <Reservations />
            </>
        )
    }
}