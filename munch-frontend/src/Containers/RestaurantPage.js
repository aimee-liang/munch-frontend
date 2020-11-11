import React from "react"




  


const RestaurantPage = ({restaurant}) => {
  console.log('restaurant')
      return restaurant ? (
      <>
      <h1>{restaurant.name}</h1>
      <h4>{restaurant.cuisines}</h4>
      <p>{restaurant.location.address}</p>

      </>
          
      ) : (
          <div>Loading...</div>
      );
  }
  
export default RestaurantPage