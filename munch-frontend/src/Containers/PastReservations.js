import React from "react"
import ReservationCard from "../Components/ReservationCard"

class PastReservations extends React.Component {

    
    makeReservationCard = () => {
        return this.props.pastReservations.map(reservation => <ReservationCard key={reservation.id} reservation={reservation} /> )
        
    }


    render(){
        
        return(
            <>
            <h4>Reservations:</h4>
            {this.props.pastReservations ? this.makeReservationCard() : null}
            </>
        )
    }
}

export default PastReservations