import React from "react"
import ReservationCard from "../Components/ReservationCard"

class Reservations extends React.Component {
    makeReservationCard = () => {
        const myReservations = this.props.reservations.filter(reservation => reservation.user_id === this.props.user.id)
        const sortedReservations = myReservations.sort((a, b) => new Date(a.datetime) - new Date(b.datetime))
        console.log(sortedReservations)
        return sortedReservations.map(reservation => <ReservationCard key={reservation.id} reservation={reservation} /> )
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