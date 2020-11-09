import React from "react"
import Header from "../Components/Header"
import Reservations from "./Reservations"

export default class Profile extends React.Component{
    render(){
        return(
            <>
            <Header/>
            <Reservations />
            </>
        )
    }
}