import React from "react"
import ReservationCard from "../Components/ReservationCard"

class Reservations extends React.Component {

    // state={
    //     removedReservations: [],
    //     remainingReservations: []
    // }
    makeReservationCard = () => {
        const myReservations = this.props.reservations.filter(reservation => reservation.user_id === this.props.user.id)
        const sortedReservations = myReservations.sort((a, b) => new Date(a.datetime) - new Date(b.datetime))
        // let remainingReservations = sortedReservations.filter( ( res ) => !this.state.removedReservations.includes( res ) );
        //console.log("remaining:", remainingReservations)
        return sortedReservations.map(reservation => <ReservationCard key={reservation.id} reservation={reservation} /> )
        
    }

    // reRenderReservations = () => {
    //     this.props.reRenderReservations()
    // }


    
    // deleteReservation = (deletedReservation) => {
    //     this.setState({removedReservations: [...this.state.removedReservations, deletedReservation]})
        
    // }
    
    render(){
        //console.log("removed:", this.state.removedReservations)
        return(
            <>
            {this.makeReservationCard()}
            </>
        )
    }
}

export default Reservations