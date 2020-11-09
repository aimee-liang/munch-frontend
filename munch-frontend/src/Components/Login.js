import React from "react"
import BeforeAuthHeader from "./BeforeAuthHeader"

class Login extends React.Component{
    state={
        username: "",
        password: ""
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    
    localLoginHandler = (e) => {
        e.preventDefault()
        this.props.loginHandler(this.state)

        this.setState(()=>({
            username: "",
            password: ""
        }))
    }

    //need some functionality for what happens if user clicks on forgot username or password
    
    render(){
        return(
            <>
            <BeforeAuthHeader />
            <p>Welcome Back, Munchie!</p>
            <form onSubmit={this.localLoginHandler}>
                <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.changeHandler} />
                <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.changeHandler} />
                <input type="submit" value="Log In" />
            </form>
            <p>Forgot Username or Password</p>
            </>
        )
    }
}

export default Login