import React from "react"
import ReservationCard from "../Components/ReservationCard"

class UpcomingReservations extends React.Component {
      
    
    makeReservationCard = () => {
      return this.props.upcomingReservations.map(reservation => <ReservationCard key={reservation.id} reservation={reservation} user={this.props.user}/> )
    }

    
    render(){
        
        return(
            <>
            <h4>Upcoming Reservations:</h4>
                <div className="reservation-section">
                {this.props.upcomingReservations ? this.makeReservationCard() : null}
                </div>
            </>
        )
    }

}
export default UpcomingReservations

