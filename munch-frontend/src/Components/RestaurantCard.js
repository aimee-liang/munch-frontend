import React from "react"
import {Route, Switch, NavLink } from 'react-router-dom'
import RestaurantPage from '../Containers/RestaurantPage'

class RestaurantCard extends React.Component{

  state = {
    date: `${new Date(Date.now()).toISOString().split('T')[0]}`,
    time: "19:00",
    guests: "2",
    confirmed: false,
    error: null
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value})
  }

  submitHandler = (e) => {
    //console.log(this.state.datetime)


    e.preventDefault()
    const restaurant = this.props.restaurant.restaurant
    let restaurantData = {
      name: restaurant.name,
      address: restaurant.location.address,
      zomato_id: restaurant.id

    }
    const token = localStorage.getItem("token")
    fetch('http://localhost:3000/api/v1/restaurants', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(
        restaurantData
        )
      })
      .then(r => r.json())
      .then((reservedRest) => { this.makeReservation(reservedRest);
      })

      .catch(error => console.error(error))




    }

    makeReservation = (reservedRest) => {
      let datetime = this.state.date + ' ' + this.state.time

      let reservationData = {
        restaurant_id: reservedRest.id,
        user_id: this.props.user.id,
        guests: this.state.guests,
        datetime: datetime

      }

      //console.log(reservationData)

      const token = localStorage.getItem("token")

      fetch('http://localhost:3000/api/v1/reservations', {
        method: 'POST',
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
          
          this.setState({confirmed: true})
        }
        //console.log(resp);

      })
      
      //.catch(error => console.error(error))
    }

  handleErrors = () => {
      return <p className='error'> {this.state.error.exception.split(": ")[2].slice(0, -1)}</p>
    
  }

  reservationConfirm = () => {
    //let parsedDate = this.state.date
    const restaurant = this.props.restaurant.restaurant
    return <p className='confirmation'> Your reservation for {this.state.guests} at {restaurant.name} on {this.state.date} at {this.state.time} is confirmed! </p>
  }




  render() {
    const restaurant = this.props.restaurant.restaurant
    //const stub = restaurant.name.replace(/[\s.;,?%]/, '')
    let today = new Date(Date.now()).toISOString().split('T')[0];
    //let yesterday = new Date(Date.now() - 1 * 86400000).toISOString().split('T')[0]



    <Switch>
      <Route path={`/restaurants/${restaurant.id}`} render= {()=> <RestaurantPage restaurant={restaurant} user={this.state.user}/>}/>
      
    </Switch>

    return(
        <>
                <div key={restaurant.id}>
                    {/* <img src={restaurant.photo_url} alt={restaurant.name}/> */}
                    
                    <NavLink to={`/restaurants/${restaurant.id}`}>
                      <h2>{restaurant.name}</h2>
                    </NavLink>
                      <h4>{restaurant.cuisines}</h4>
                      <p>{restaurant.location.address}</p>
                      <form className="reservation" onSubmit={this.submitHandler}>
                      <label htmlFor="reservation_date">Reservation Date:</label>
                      <input type="date" id="reservation-date" name="date" min={today} value={this.state.date} onChange={this.changeHandler} />
                      <label htmlFor="reservation_time">Reservation Time:</label>
                      <input type="time" id="reservation-time" name="time"  min="12:00" max="22:00" step="900" value={this.state.time} onChange={this.changeHandler}/>
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
                      <input type="submit" value="Make Reservation" />
                      { this.state.confirmed ? this.reservationConfirm() : null }
                      { this.state.error ? this.handleErrors() : null }
                      </form>
                    <br/>
                    <br/>
                </div>
              </>
            )}
}
export default RestaurantCard