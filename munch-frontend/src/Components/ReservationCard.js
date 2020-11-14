import React from "react"
import { FaTimesCircle } from "react-icons/fa";
class ReservationCard extends React.Component {

    state = {
        deleted: false,
        error: null,
        changed: false,
        changing: false,
        time: this.props.reservation.datetime.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'})
        

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

    changeReservation = () => {
        const reservation = this.props.reservation
        let isoDate = reservation.datetime
        let dateOnly = new Date(isoDate).toDateString()


        
        let datetime = dateOnly + ' ' + this.state.time + '-5:00'

        let reservationData = {
            restaurant_id: reservedRest.id,
            user_id: this.props.user.id,
            guests: this.state.guests,
            datetime: datetime

        }

        console.log(reservationData)

        const token = localStorage.getItem("token")

        fetch('http://localhost:3000/api/v1/reservations', {
            method: 'PATCH',
            headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
            Accept: 'application/json'
            },
            body: JSON.stringify(
            reservationData
            )
        })
        
        .then(resp => resp.json())
        .then((resp) => {

        if (resp.exception) {
            this.setState({error: resp})
        } else {
            
            this.setState({changed: true})
        }
          //console.log(resp);

        })
        
        //.catch(error => console.error(error))
    }



    renderReservation = () => {
        const reservation = this.props.reservation

        let isoDate = reservation.datetime
        let dateOnly = new Date(isoDate).toDateString()

        
        
            if (this.state.deleted) {
                <h4>Deleted</h4>
            }else if (this.state.changing) {
                <div className="resv-container">

                <div className="resv-card" key={reservation.id}>
                    <h4 className="resv-rest-name">{reservation.restaurant.name}</h4>
                    <p>Date: {dateOnly}</p>
                    <form className="reservation" onSubmit={this.submitHandler}>
                    <label htmlFor="reservation_time">Reservation Time:</label>
                    <span className="resv-date"></span>
                    <input type="time" id="reservation-time" name="time"  min="12:00" max="22:00" step="900" value={this.state.time} onChange={this.changeHandler}/>
                    <span className="resv-date"></span>
                    <label>
                    Guests:
                    <select name="guests" value={this.state.guests} onChange={this.changeHandler}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                    </label>
                    <br></br>
                    <Button variant="success" input type="submit" input="true" value="Make Reservation">Make Reservation</Button>
                    { this.state.confirmed ? this.reservationConfirm() : null }
                    { this.state.error ? this.handleErrors() : null }
                    </form>
                    
            

                </div>

            </div> 
            } else {

            <div className="resv-container">

                <div className="resv-card" key={reservation.id}>
                    <h4 className="resv-rest-name">{reservation.restaurant.name}<FaTimesCircle  className="delete-icon" onClick={this.deleteHandler}/></h4>
                    <p>{reservation.restaurant.address}</p>
                    <p>Date: {dateOnly}</p>
                    <p>Time: {timeOnly}</p>
                    <p>Party Size: {reservation.guests}</p>
                    
            

                </div>

            </div>}


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

