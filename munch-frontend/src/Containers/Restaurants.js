import React from "react"
import Search from "../Components/Search"
import RestaurantCard from "../Components/RestaurantCard"

class Restaurants extends React.Component{

    state = {
        restaurants: [],
        location: 'lat=40.705138&lon=-74.014096',
        search: "",
    }

    // fetch all restaurants
    componentDidMount(){
        this.fetchRestaurants()
    }

    fetchRestaurants = () => {
        const restaurantUrl = `https://developers.zomato.com/api/v2.1/search?q=${this.state.search}&count=20&${this.state.location}&radius=1000&sort=real_distance&order=asc`

        fetch(restaurantUrl, {
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


    searchDoer = (search, location) => {
        console.log(this.state)
        this.setState({
            search: search,
            location: location
        })
        console.log(this.state)
        
    }

    renderRestaurants = () => this.state.restaurants.map((restaurant) => {

        return <RestaurantCard key={restaurant.restaurant.id} restaurant={restaurant} user={this.props.user}/>
    })
    



    render() {
        //console.log(this.state.restaurants)

        return(
            <>
            <Search searchDoer = {this.searchDoer}/>
            {this.renderRestaurants()} 
            </>

    )

    }
}

export default Restaurants



    // render(){

    //     return(
    //         <>
    //     <div className="searchbar">
    //         <Search restaurants={this.state.restaurants} />
    //     </div>

    //     <div className="restaurant-info">
    //         {/* <h3>Restaurant Name here</h3>  */}
    //         {/* <h4>Restaurant Address here</h4> */}
    //         {/* <p>Price Range:</p> */}
    //         {/* <p>Best Known for their: (hashtags or popular menu items here)</p> */}
    //     </div>

    //     <div className="restaurant-menu">
    //         {/* <img alt="" src="" /> menu images to go here */}
    //     </div>

    //     <div className="restaurant-images">
    //         {/* <img alt="" src="" /> restaurant images here */}
    //     </div>
    //     </>
    // )

    // }

