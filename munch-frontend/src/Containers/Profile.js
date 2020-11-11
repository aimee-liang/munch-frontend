import React from "react"
import Reservations from "./Reservations"
import Reviews from "./Reviews"
import AboutMe from "../Components/AboutMe"

export default class Profile extends React.Component{

    state={
        reservations: [],
        reviews: []
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
            .then(reservationsData => this.setState(() => ({
                reservations: reservationsData
            })))
            .catch(error => console.log("Error", error))
    }

    // componentDidMount(){
    //     const token = localStorage.getItem("token")
    //     Promise.all([
    //         fetch('http://localhost:3000/api/v1/reviews'),
    //         fetch('http://localhost:3000/api/v1/reservations',{
    //             method: 'GET',
    //             headers: {
    //                 Authorization: `Bearer ${token}`,
    //             }
    //         })
    //     ])
    //         .then(([resp1, resp2]) => Promise.all([resp1.json(), resp2.json()]))
    //         .then(([reservationsData, reviewsData]) => this.setState(() => ({
    //             reservations: reservationsData,
    //             reviews: reviewsData
    //         })))
    //         .catch(error => console.log("Error", error))
    // }

    render(){
        return(
            <>
            <AboutMe user={this.props.user}/>
            <Reservations reservations={this.state.reservations} />
            <Reviews user={this.state.reviews}/>
            </>
        )
    }
}