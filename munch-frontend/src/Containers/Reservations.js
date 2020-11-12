import React from "react"
import ReservationCard from "../Components/ReservationCard"

class Reservations extends React.Component {
    makeReservationCard = () => {
        const myReservations = this.props.reservations.filter(reservation => reservation.user_id === this.props.user.id)
        return myReservations.map(reservation => <ReservationCard key={reservation.id} reservation={reservation} /> )
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