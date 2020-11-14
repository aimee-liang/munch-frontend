import React from "react"
import Search from "../Components/Search"
import RestaurantContainer from "./RestaurantsContainer"
//import InfiniteScroll from 'react-infinite-scroll-component';

class Restaurants extends React.Component{

    state = {
        restaurants: [],
        search: "",
        location: 'lat=40.705138&lon=-74.014096',
        start: 0
    }


    componentDidMount(){
        this.fetchRestaurants()
    }

    fetchRestaurants = () => {
        const restaurantUrl = `https://developers.zomato.com/api/v2.1/search?q=${this.state.search}&start=${this.state.start}&count=20&${this.state.location}&radius=1000&sort=real_distance&order=asc`

        fetch(restaurantUrl, {
            headers: {
            Accept: "application/json",
            "User-Key": "7dc855cf4405df1034f62de35de0744e"
        }
        })
        .then(resp => resp.json())
        .then(restaurantData => {
            this.setState(() => ({
                restaurants: [...this.state.restaurants, ...restaurantData.restaurants]
            }))
        })
    }

    fetchMoreDoer = () => {
        this.setState({
            start: this.state.start + 20
        }, this.fetchRestaurants
        )
    }


    searchDoer = (search, location) => {

        this.setState({
            restaurants: [],
            search: search,
            location: location
        },
        this.fetchRestaurants()
        )

        
    }

    render() {

        return(
            <>
            
            <Search searchDoer = {this.searchDoer}/>
            {/* <InfiniteScroll
                dataLength={this.state.restaurants.length} //This is important field to render the next data
                next={() => console.log("hit bottom")}
                hasMore={true}
                loader={<h4>Loading...</h4>}
                endMessage={
                <p style={{ textAlign: 'center' }}>
                <b>Yay! You have seen it all</b>
                </p>
                }
            > */}
            {this.state.restaurants ? <RestaurantContainer restaurants = {this.state.restaurants} user={this.props.user} /> : <h4>Loading...</h4> }
            <button onClick={this.fetchMoreDoer}>Load More</button>
            {/* </InfiniteScroll> */}
            </>

    )

    }
}

export default Restaurants
