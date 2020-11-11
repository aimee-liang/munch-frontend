import React from "react"
import RestaurantCard from "../Components/RestaurantCard"


class RestaurantsContainer extends React.Component{

  handleShowPage2 = (restaurant) => {
    this.props.handleShowPage3(restaurant)
  }



  renderRestaurants = () => {
    this.props.show ? unmountComponentAtNode(document.getElementById('root')) :
    this.props.restaurants.map((restaurant) => {

    return <RestaurantCard key={restaurant.restaurant.id} restaurant={restaurant} user={this.props.user} handleShowPage2={this.handleShowPage2}/>
  })}

  render() {

    return(
        <>
        {this.renderRestaurants()}
        </>

)

}



}

export default RestaurantsContainer