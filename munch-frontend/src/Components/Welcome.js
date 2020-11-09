import React from "react"
import Header from "./Header"
import Search from "./Search"

class Welcome extends React.Component{

    state = {
        restaurants: []
    }

    // fetch all restaurants
    componentDidMount(){
        fetch("https://developers.zomato.com/api/v2.1/search?q=&count=20&lat=40.705138&lon=-74.014096&radius=1000&sort=real_distance&order=asc", {
            headers: {
            Accept: "application/json",
            "User-Key": "7dc855cf4405df1034f62de35de0744e"
        }
        })
        .then(resp => resp.json())
        .then(restaurantData => {
            this.setState(() => ({
                restaurants: restaurantData.restaurants
            }))
        })
    }

    renderResults = results => {
        this.setState(() => ({
            restaurants: results.restaurants})
        )}

    render() {
        console.log(this.state.restaurants)

        return(
            <>
            <Header />
            <Search renderResults = {this.renderResults}/>
                {this.state.restaurants.map((restaurant) => (
                    <div key={restaurant.restaurant.id}>
                        <img src={restaurant.restaurant.photo_url} alt={restaurant.restaurant.name}/>
                        <h2>{restaurant.restaurant.name}</h2>
                        <h4>{restaurant.restaurant.cuisines}</h4>
                        <p>{restaurant.restaurant.location.address}</p>
                        <label for="reservation_date">Reservation Date:</label>
                        <input type="date" id="reservation-date" name="reservation-date" defaultValue="2020-11-13"></input>
                        <label for="reservation_time">Reservation Time:</label>
                        <input type="time" id="reservation-time" name="reservation-time" defaultValue="19:00" min="12:00" max="22:00" step="900"></input>
                        <br/>
                        <br/>

                    </div>
                ))}
            </>


    )

    }
}

export default Welcome