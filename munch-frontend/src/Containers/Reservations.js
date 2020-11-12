import { render } from "@testing-library/react"
import React from "react"
import UpcomingReservations from "./UpcomingReservations"
import PastReservations from "./UpcomingReservations"

class Reservations extends React.Component {

    state={
        
        upcomingReservations: [],
        pastReservations: []
    }
    // makeReservationCard = () => {
    //     const myReservations = this.props.reservations.filter(reservation => reservation.user_id === this.props.user.id)
    //     const sortedReservations = myReservations.sort((a, b) => new Date(a.datetime) - new Date(b.datetime))
    //     // let remainingReservations = sortedReservations.filter( ( res ) => !this.state.removedReservations.includes( res ) );
    //     //console.log("remaining:", remainingReservations)
    //     return sortedReservations.map(reservation => <ReservationCard key={reservation.id} reservation={reservation} /> )
        
    componentDidMount(){
        this.fetchReservations()
    }

    fetchReservations = () => {
        const token = localStorage.getItem("token")
            fetch('http://localhost:3000/api/v1/reservations',{
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            .then(resp=> resp.json())
            .then(reservations => this.sortReservations(reservations))
            .catch(error => console.log("Error", error))}
    

    sortReservations = (reservations) => {
        let upcomingReservations = []
        let pastReservations = []
        const myReservations = reservations.filter(reservation => reservation.user_id === this.props.user.id)
        const sortedReservations = myReservations.sort((a, b) => new Date(a.datetime) - new Date(b.datetime))
            sortedReservations.forEach(reservation => {
                if (new Date(reservation.datetime) > new Date()) {
                    upcomingReservations.push(reservation)
                }else{ pastReservations.push(reservation)
                }
                this.setState({
                    upcomingReservations: upcomingReservations,
                    pastReservations: pastReservations
                    
                })
            })}
            


                
            
            
        
        
        

        render() {
        return(
            <>
            <UpcomingReservations upcomingReservations={this.state.upcomingReservations} user={this.props.user}/>
            <PastReservations pastReservations={this.state.pastReservations} user={this.props.user}/>
            </>
        )
    }
}

export default Reservations