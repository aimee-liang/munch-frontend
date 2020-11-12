import React from "react"
import RestaurantCard from "../Components/RestaurantCard"

class RestaurantsContainer extends React.Component{



  renderRestaurants = () => this.props.restaurants.map((restaurant) => {

    return <RestaurantCard key={restaurant.restaurant.id} restaurant={restaurant} user={this.props.user}/>
  })

  render() {

    return(
        <>
            {this.renderRestaurants()}
        </>

)

}



}

export default RestaurantsContainer