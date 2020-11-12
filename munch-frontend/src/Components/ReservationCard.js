import React from "react"
import { FaTimesCircle } from "react-icons/fa";
class ReservationCard extends React.Component {

    state = {
        deleted: false

    }


    deleteHandler = () => {
        const token = localStorage.getItem("token")
            fetch(`http://localhost:3000/api/v1/reservations/${this.props.reservation.id}`,{
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            .then(resp=> resp.json())
            .then(this.setState({deleted: true}))
            .catch(error => console.log("Error", error))
    }

    render(){
        const reservation = this.props.reservation

        let isoDate = this.props.reservation.datetime
        let dateOnly = new Date(isoDate).toDateString()

        let isoTime = this.props.reservation.datetime
        let timeOnly = new Date(isoTime).toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'})
        



        return (
            <>
            
            {this.state.deleted ? <h4>Deleted</h4> : <div className="resv-container">

                <div className="resv-card" key={reservation.id}>
                    <h4 className="resv-rest-name">{reservation.restaurant.name}<FaTimesCircle  className="delete-icon" onClick={this.deleteHandler}/></h4>
                    <p>{reservation.restaurant.address}</p>
                    <p>Date: {dateOnly}</p>
                    <p>Time: {timeOnly}</p>
                    <p>Party Size: {reservation.guests}</p>
                    
            

                </div>

            </div>}
            </>
    )}
}

export default ReservationCard