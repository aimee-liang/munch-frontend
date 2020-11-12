import React from "react"

const ReservationCard = (props) => {
    const reservation = props.reservation

    let isoDate = props.reservation.datetime
    let dateOnly = new Date(isoDate).toDateString()

    let isoTime = props.reservation.datetime
    let timeOnly = new Date(isoTime).toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'})


    return (
        <>
        <div className="resv-container">

            <div className="resv-card" key={reservation.id}>
                <h4 className="resv-rest-name">{reservation.restaurant.name}</h4>
                <p>{reservation.restaurant.address}</p>
                <p>Date: {dateOnly}</p>
                <p>Time: {timeOnly}</p>
                <p>Party Size: {reservation.guests}</p>
            </div>

        </div>
        </>
    )
}

export default ReservationCard