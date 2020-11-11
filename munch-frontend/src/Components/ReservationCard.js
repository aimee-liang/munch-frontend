import React from "react"

const ReservationCard = (props) => {
    /* something to also work on - ability to delete or edit a reservation */
    const reservation = props.reservation

    let isoDate = props.reservation.datetime
    let dateOnly = new Date(isoDate).toDateString()

    let isoTime = props.reservation.datetime
    let timeOnly = new Date(isoTime).toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'})


    return (
        <>
            {/* <p>{console.log(reservation)}</p> */}
        <div key={reservation.id}>
            <h4>{reservation.restaurant.name}</h4>
            <p>{reservation.restaurant.address}</p>
            <p>Date: {dateOnly}</p>
            <p>Time: {timeOnly}</p>
            <p>Party Size: {reservation.guests}</p>
        </div>
        </>
    )
}

export default ReservationCard