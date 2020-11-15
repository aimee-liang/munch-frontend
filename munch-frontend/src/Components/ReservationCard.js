import React from "react"
import { FaTimesCircle } from "react-icons/fa";
class ReservationCard extends React.Component {

    state = {
        deleted: false,
        confirmed: false,
        error: null,
        changed: false,
        changing: false,
        time: new Date(this.props.reservation.datetime).toLocaleTimeString('eng-gb', {hour: '2-digit', minute:'2-digit'}),
        guests: this.props.reservation.guests

        

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

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }
    

    submitHandler = (e) => {
        e.preventDefault()
        const reservation = this.props.reservation
        let dateOnly = new Date(reservation.datetime).toDateString()


        
        let datetime = dateOnly + ' ' + this.state.time + '-5:00'

        let reservationData = {
            
            guests: this.state.guests,
            datetime: datetime

        }

        console.log(reservationData)

        const token = localStorage.getItem("token")

        fetch(`http://localhost:3000/api/v1/reservations/${reservation.id}`, {
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
            let timeOnly = new Date(resp.datetime).toLocaleTimeString('eng-gb', {hour: '2-digit', minute:'2-digit'})
            this.setState({
                guests: resp.guests,
                time: timeOnly,
                changed: true,
                changing: false
            })
        }
          //console.log(resp);

        })
        
        //.catch(error => console.error(error))
    }
    reservationConfirm = () => {
    
        return <p className='confirmation'> Your reservation is confirmed! </p>
    }



    renderReservation = () => {
        const reservation = this.props.reservation

        let isoDate = reservation.datetime
        let dateOnly = new Date(isoDate).toDateString()
        let isoTime = reservation.datetime
        let timeOnly = new Date(isoTime).toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'})

        
        
            if (this.state.deleted) {
                
                return (<h4>Deleted</h4>)
            }else if (this.state.changing) {
                return(
                
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
                    <button input type="submit" input="true" value="submit">Submit Changes</button>
                    { this.state.error ? this.handleErrors() : null }
                    </form>
                </div>
            </div> )
            } else { 
            return(
            <div className="resv-container">

                <div className="resv-card" key={reservation.id}>
                    <h4 className="resv-rest-name">{reservation.restaurant.name}<FaTimesCircle  className="delete-icon" onClick={this.deleteHandler}/></h4>
                    <p>{reservation.restaurant.address}</p>
                    <p>Date: {dateOnly}</p>
                    <p>Time: {this.state.time}</p>
                    <p>Party Size: {this.state.guests}</p>
                    <button  name="edit" value="edit" onClick={() => this.setState({changing: true})} >Edit Reservation</button>
                    { this.state.changed ? this.reservationConfirm() : null }
                </div>

            </div>)}
    }
    


    

    

    render(){
        

        return (
            <>
            
            {this.renderReservation()}
            </>
    )}

}
export default ReservationCard

