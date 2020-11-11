// import logo from './logo.svg';
import './App.css';
import React from "react"
import {Route, Switch, withRouter } from 'react-router-dom'
import Signup from "./Components/Signup"
import Login from "./Components/Login"
import Restaurants from './Containers/Restaurants';
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Profile from "./Containers/Profile"
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component{
  state={
    user: null,
  }

  componentDidMount(){
    const token = localStorage.getItem("token")
    if (token){
      fetch("http://localhost:3000/api/v1/profile", {
        method: "GET",
        headers: {Authorization: `Bearer ${token}`},
      })
        .then(resp => resp.json())
        .then(data => this.setState({user: data.user}))
    } else {
      this.props.history.push("/login")
    }
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
      .then(data => {
        localStorage.setItem("token", data.jwt)
        this.setState({user: data.user}, () => this.props.history.push(`/restaurants`) )
      },
    )
  }


  loginHandler = (userInfo) => {
    fetch(`http://localhost:3000/api/v1/login`,{
      method: "POST",
      headers:{
          "content-type": "application/json",
          accepts: "application/json",
        },
        body: JSON.stringify({user: userInfo})
      })
      .then(resp => resp.json())
      .then(data => {
        localStorage.setItem("token", data.jwt)
        this.setState({user: data.user}, () => this.props.history.push(`/restaurants`) )
      },
      )
    }

  logMeOut = () => {
    localStorage.removeItem("token")
    this.setState({user: null})
    this.props.history.push("/login")
  }

  showMeUser = () => {
    console.log("In App.js, user is:", this.state.user)
  }

  render(){

    this.showMeUser()

    return (
      <>
      <Header user={this.state.user} logMeOut={this.logMeOut} />

      <Switch>
        <Route path="/signup" render={()=> <Signup signUpHandler={this.signUpHandler}/>} />
        <Route path="/login" render={()=> <Login loginHandler={this.loginHandler} />} />
        <Route path="/restaurants" component={()=> <Restaurants user={this.state.user} />} />
        <Route path="/profile" render={()=> <Profile user={this.state.user} />} />
        <Route path="/logout" render={()=> <Login loginHandler={this.loginHandler} /> }/>
      </Switch>

      <Footer/>
      </>
    )
  }

}

export default withRouter(App);
