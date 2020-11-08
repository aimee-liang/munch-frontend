import React from "react"
import Header from "./Header"

class Welcome extends React.Component{

    state = {
        restaurants: []
    }

    // fetch all restaurants
    componentDidMount(){
        fetch("https://developers.zomato.com/api/v2.1/search?count=100&lat=40.705138&lon=-74.014096&radius=1000&sort=real_distance&order=asc", {
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

    render(){
        console.log(this.state.restaurants)

        return(
            <> <Header />
                {this.state.restaurants.map((restaurant) => (
                    <div key={restaurant.restaurant.id}>
                        <img src={restaurant.restaurant.photo_url} alt={restaurant.restaurant.name}/>
                        <h2>{restaurant.restaurant.name}</h2>
                        <h4>{restaurant.restaurant.cuisines}</h4>
                        <p>{restaurant.restaurant.location.address}</p>
                        <br/>

                    </div>
                ))}
            </>


    )

    }
}

export default Welcome