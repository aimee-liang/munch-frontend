import React from "react"
import { FaTimesCircle } from "react-icons/fa";

const ReservationCard = (props) => {
    const reservation = props.reservation

    let isoDate = props.reservation.datetime
    let dateOnly = new Date(isoDate).toDateString()

    let isoTime = props.reservation.datetime
    let timeOnly = new Date(isoTime).toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'})

    let deleteHandler = () => {
        const token = localStorage.getItem("token")
            fetch(`http://localhost:3000/api/v1/reservations/${reservation.id}`,{
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            .then(resp=> resp.json())
            .then(deletedReservation => props.deleteReservation(deletedReservation))
            .catch(error => console.log("Error", error))
    }


    return (
        <>
        
        <div className="resv-container">

            <div className="resv-card" key={reservation.id}>
                <h4 className="resv-rest-name">{reservation.restaurant.name}<FaTimesCircle  className="delete-icon" onClick={deleteHandler}/></h4>
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