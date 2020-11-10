import React from "react"

const ReservationCard = (props) => {
    /* something to also work on - ability to delete or edit a reservation */
    const reservation = props.reservation
    return (
        <>
            {/* <p>{console.log(reservation)}</p> */}
        <div key={reservation.id}>
            <h4>{reservation.restaurant.name}</h4>
            <p>{reservation.restaurant.address}</p>
            <p>Date: {reservation.datetime}</p>
            <p>Time: {reservation.datetime}</p>
            <p>Party Size: {reservation.guests}</p>
        </div>
        </>
    )
}

export default ReservationCard