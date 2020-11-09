// import logo from './logo.svg';
import './App.css';
import React from "react"
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom'
import Welcome from "./Components/Welcome"
import Signup from "./Components/Signup"
import Login from "./Components/Login"
import Restaurant from './Containers/Restaurant';
import Policy from "./Components/Policy"
import Header from "./Components/Header"
import Footer from "./Components/Footer"

class App extends React.Component{
  state={
    user: null,
  }

  signUpHandler = (userObj) => {
    fetch(`http://localhost:3000/api/v1/users`, {
      method: "POST",
      headers:{
        "content-type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify({user: userObj})
    })
    .then(resp => resp.json())
    .then(data => this.setState({user: data.user}))
  }


/* loginHandler = (userInfo) => {
  fetch(`http://localhost:3000/api/v1/login`,{
    headers:{
        "content-type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify({user: userObj})
    })
    .then(resp => resp.json())
    .then(data => this.setState({user: data.user}))
  })
}
*/

  render(){
    return (
      <>
      <BrowserRouter>
      <Switch>
        <Route path="/login" render={()=> <Login loginHandler={this.loginHandler} />} />
        <Route path="/signup" render={()=> <Signup signUpHandler={this.signUpHandler}/>} />
        <Route path="/welcome" component={Welcome} />
        <Route path="/restaurants" component={Restaurant} />
        <Route path="/policy" component={Policy} />
      </Switch>
      </BrowserRouter>
      </>
    )
  }

}

export default App;
