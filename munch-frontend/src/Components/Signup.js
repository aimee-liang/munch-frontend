import React from "react"

class Signup extends React.Component{
    state={
        username: "",
        password: ""
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    
    localSignupHandler = (e) => {
        e.preventDefault()
        this.props.signUpHandler(this.state)

        this.setState(()=>({
            username: "",
            password: ""
        }))
    }
    
    render(){
        return(
            <form onSubmit={this.localSignupHandler}>
                <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.changeHandler} />
                <input type="text" name="password" placeholder="Password" value={this.state.password} onChange={this.changeHandler} />
                <input type="submit" value="sign up" />
            </form>
        )
    }
}

export default Signup