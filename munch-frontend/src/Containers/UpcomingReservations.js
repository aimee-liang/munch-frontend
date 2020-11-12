import React from "react"
import ReservationCard from "../Components/ReservationCard"

class UpcomingReservations extends React.Component {
      
    
    makeReservationCard = () => {
      return this.props.upcomingReservations.map(reservation => <ReservationCard key={reservation.id} reservation={reservation} /> )
    }

    
    render(){
        
        return(
            <>
            <h4>Upcoming Reservations:</h4>
            {this.props.upcomingReservations ? this.makeReservationCard() : null}
            </>
        )
    }

}
export default UpcomingReservations

