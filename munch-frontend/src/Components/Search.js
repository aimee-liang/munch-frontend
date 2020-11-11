import React from "react"

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
            
        //setTimeout(() => { this.setState({search: ""}); }, 2000)
        
    }


    render() {
        return(
            <>
            <form className="search" onSubmit={this.searchHandler}>
                <input type= "text" name="search" placeholder="Search cuisines, specialties, etc." value={this.state.search} onChange={this.changeHandler} />
                <label>
                    Neighborhood:
                    <select name="location" value={this.state.location} onChange={this.changeHandler}>
                    <option value="lat=40.705138&lon=-74.014096">Flatiron NYC</option>
                    <option value="lat=40.701085&lon=-73.987546">Flatiron Brooklyn</option>
                    <option value="lat=40.695914&lon=-73.917302">Bushwick</option>
                    <option value="lat=40.727006&lon=-73.982990">East Village</option>
                </select>
                </label>
                <input type="submit" value="Search" />
            </form>
            </>
        )
    }

}

export default Search