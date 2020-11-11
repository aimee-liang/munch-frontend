import React from "react"
import {Form, Button} from "react-bootstrap"
class Signup extends React.Component{
    state={
        /* avatar: "", // ideally want this to be an option for users to upload an image so it can be more interactive */
        username: "",
        email: "",
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
            email: "",
            password: "",
            confirm_password: ""
        }))
    }
    


    render(){
        return(
            <>
            <h4 className="create-account">Create a new account</h4>
            <div className="signup">

            <Form className="signup-form" onSubmit={this.localSignupHandler}>

                <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.changeHandler} />
                <br>
                </br>
                <br>
                </br>
                <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.changeHandler} />
                <br>
                </br>
                <br>
                </br>
                <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.changeHandler} />
                <br>
                </br>
                <br>
                </br>
                <input type="password" name="confirm_password" placeholder="Confirm Password" value={this.state.confirm_password} onChange={this.changeHandler} />
                <br>
                </br>
                <br>
                </br>
                <Button variant="primary" className="signup-button" input type="submit" input="true" value="sign up">Sign up </Button>
            
            </Form>

            </div>
            </>
        )
    }
}

export default Signup