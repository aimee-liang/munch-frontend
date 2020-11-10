import React from "react"
import ReservationCard from "../Components/ReservationCard"

class Reservations extends React.Component {
    makeReservationCard = () => {
        return this.props.reservations.map(reservation => <ReservationCard key={reservation.id} reservation={reservation} /> )
    }

    render(){
        return(
            <>
            {this.makeReservationCard()}
            </>
        )
    }
}

export default Reservations