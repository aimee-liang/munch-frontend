import React from "react"
import {Form, Button} from 'react-bootstrap'

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
    
    render(){
        return(
            <>
            <p className="welcome-back">Welcome Back, Munchie!</p>
            <Form className="login-form" onSubmit={this.localLoginHandler}>
                
                <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.changeHandler} />
                <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.changeHandler} />
                <Button variant="primary" input type="submit" input="true" value="Log In"> Login </Button>
            </Form>

            </>
        )
    }
}

export default Login