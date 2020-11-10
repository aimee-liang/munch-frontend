import React from "react"


class RestaurantCard extends React.Component{

  state = {
    date: "2020-11-13",
    time: "19:00",
    guests: "2",
    
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value})
  }

  submitHandler = (e) => {
    console.log(this.state.datetime)


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

      console.log(reservationData)

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
      .then(r => r.json())
      .then((r) => {
        console.log(r);
      })

      .catch(error => console.error(error))
  }




  render() {
    const restaurant = this.props.restaurant.restaurant
    return(
        <>
                <div key={restaurant.id}>
                    <img src={restaurant.photo_url} alt={restaurant.name}/>
                    <h2>{restaurant.name}</h2>
                    <h4>{restaurant.cuisines}</h4>
                    <p>{restaurant.location.address}</p>
                    <form className="reservation" onSubmit={this.submitHandler}>
                    <label htmlFor="reservation_date">Reservation Date:</label>
                    <input type="date" id="reservation-date" name="date" value={this.state.date} onChange={this.changeHandler} />
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
                    </form>
                    <br/>
                    <br/>
                </div>
              </>
            )}
}
export default RestaurantCard