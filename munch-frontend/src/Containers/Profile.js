import React from "react"
import Reservations from "./Reservations"
// import Reviews from "./Reviews"
import AboutMe from "../Components/AboutMe"

export default class Profile extends React.Component{

    state={
        reservations: []
    }

    componentDidMount(){
        const token = localStorage.getItem("token")
        fetch('http://localhost:3000/api/v1/reservations',{
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        .then(resp=> resp.json())
        // .then(data => console.log("Reservations", data))
        .then(reservationsData => this.setState(() => ({
            reservations: reservationsData
        })))
        .catch(error => console.log("Error", error))
    }

    render(){
        return(
            <>
            <AboutMe user={this.props.user}/>
            <Reservations reservations={this.state.reservations} />
            {/* <Reviews user={this.props.user}/> */}
            </>
        )
    }
}