import React from "react"
import {Button} from "react-bootstrap"
class Search extends React.Component{
    state={
        search: "",
        location: "lat=40.705138&lon=-74.014096"
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    searchHandler = (e) => {
        e.preventDefault()
        let search = this.state.search
        let location = this.state.location
        
        
        this.props.searchDoer(search, location)

    }


    render() {
        return(
            <>
            <div className="search-parent">

            <form className="search" onSubmit={this.searchHandler}>
                <input type= "text" name="search" placeholder="Search cuisines, specialties, etc." value={this.state.search} onChange={this.changeHandler} />
                <label>
                    Neighborhood:
                    <select name="location" value={this.state.location} onChange={this.changeHandler}>
                    <option value="lat=40.705138&lon=-74.014096">Flatiron School NYC</option>
                    <option value="lat=40.701085&lon=-73.987546">Flatiron School Brooklyn</option>
                    <option value="lat=40.695914&lon=-73.917302">Bushwick</option>
                    <option value="lat=40.727006&lon=-73.982990">East Village</option>
                    <option value="lat=40.747720&lon=-73.986783">Ktown</option>
                    <option value="lat=40.761884&lon=-73.831016">Flushing</option>
                    <option value="lat=40.778534&lon=-73.980008">Upper West Side</option>
                    <option value="lat=40.740612&lon=-74.007195">Meatpacking District</option>
                </select>
                </label>
                <Button variant="danger" input type="submit" input="true" value="Search">Show Me Food</Button>
            </form>

            </div>
            </>
        )
    }

}

export default Search