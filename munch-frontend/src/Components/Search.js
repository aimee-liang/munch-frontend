import React from "react"

class Search extends React.Component{
    state = {
        search: "",
        location: "lat=40.705138&lon=-74.014096"
        
    }


    changeHandler = (e) => {
      console.log(e)
      this.setState({ [e.target.name]: e.target.value})
  
    }
  
    searchHandler = (e) => {
      e.preventDefault()

      fetch(`https://developers.zomato.com/api/v2.1/search?q=${this.state.search}&count=20&${this.state.location}&radius=1000&sort=real_distance&order=asc`, {
              headers: {
              Accept: "application/json",
              "User-Key": "7dc855cf4405df1034f62de35de0744e"
          }
          })
          .then(resp => resp.json())
          .then(results => 
            this.props.renderResults(results)
            
          )
          .catch(error => console.error(error))
          
      
  
      this.setState({
        search: ""
      })
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