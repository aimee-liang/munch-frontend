import React from "react"
import Search from "../Components/Search"

class Restaurant extends React.Component{

    state={
        restaurants: []
    }

    // fetch all restaurants
    componentDidMount(){
        fetch(`http://localhost:3000/api/v1/restaurants`)
        .then(resp => resp.json)
        .then(restaurantData => {
            this.setState(() => ({
                restaurants: restaurantData
            }))
        })
    }

    render(){

        return(
            <>
        <div className="searchbar">
            <Search restaurants={this.state.restaurants} />
        </div>

        <div className="restaurant-info">
            {/* <h3>Restaurant Name here</h3>  */}
            {/* <h4>Restaurant Address here</h4> */}
            {/* <p>Price Range:</p> */}
            {/* <p>Best Known for their: (hashtags or popular menu items here)</p> */}
        </div>

        <div className="restaurant-menu">
            {/* <img alt="" src="" /> menu images to go here */}
        </div>

        <div className="restaurant-images">
            {/* <img alt="" src="" /> restaurant images here */}
        </div>
        </>
    )

    }
}

export default Restaurant