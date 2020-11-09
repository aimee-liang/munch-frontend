import React from "react"
import RestaurantCard from "./RestaurantCard"
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
        )
    }

    renderRestaurants = () => this.state.restaurants.map((restaurant) => {

        return <RestaurantCard key={restaurant.restaurant.id} restaurant={restaurant} />
    })
    



    render() {
        //console.log(this.state.restaurants)

        return(
            <>
            <Header />
            <Search renderResults = {this.renderResults}/>
            {this.renderRestaurants()}
            </>


    )

    }
}

export default Welcome