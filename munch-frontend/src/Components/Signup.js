import React from "react"
import BeforeAuthHeader from "./BeforeAuthHeader"

class Signup extends React.Component{
    state={
        avatar: "", // ideally want this to be an option for users to upload an image so it can be more interactive
        username: "",
        password: "",
        confirm_password: "",
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    
    localSignupHandler = (e) => {
        e.preventDefault()
        this.props.signUpHandler(this.state)

        this.setState(()=>({
            username: "",
            password: "",
            confirm_password: ""
        }))
    }
    
    render(){
        return(
            <>
            <BeforeAuthHeader />
            <h4>Create a new account below</h4>
            <form onSubmit={this.localSignupHandler}>
                <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.changeHandler} />
                <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.changeHandler} />

                <input type="password" name="confirm_password" placeholder="Confirm Password" value={this.state.password} onChange={this.changeHandler} />

                <input type="submit" value="sign up" />
            </form>
            </>
        )
    }
}

export default Signup