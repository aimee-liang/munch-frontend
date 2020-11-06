import './App.css';
import React from "react"
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom'
import Header from "./Components/Header"
import Welcome from "./Components/Welcome"
import Footer from "./Components/Footer"

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


const App = () => {


  return (
    <div className="main">
    <Header/>
    <Welcome />
    <Footer />
  </div>
  )}
  
export default App
