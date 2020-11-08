import React from "react"
import Header from "./Header"

class Welcome extends React.Component{

    state = {
        restaurants: []
    }

    // fetch all restaurants
    componentDidMount(){
        fetch(`http://localhost:3000/api/v1/restaurants`)
        .then(resp => resp.json())
        .then(restaurantData => {
            this.setState(() => ({
                restaurants: restaurantData
            }))
        })
    }

    render(){
        console.log(this.state.restaurants)

        return(
            <> <Header />
                {this.state.restaurants.map((restaurant) => (
                    <div key={restaurant.id}>
                        <img src={restaurant.photo_url} alt={restaurant.name}/>
                        <h2>{restaurant.name}</h2>
                        <h4>{restaurant.cuisines}</h4>
                        <p>{restaurant.address}</p>

                    </div>
                ))}
            </>


    )

    }
}

export default Welcome