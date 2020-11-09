import React from "react"

class Search extends React.Component{
    state={
        search: "",
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }


}

export default Search