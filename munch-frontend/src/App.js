import logo from './logo.svg';
import './App.css';
import React from "react"
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom'
import Welcome from "./Components/Welcome"

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

class App extends React.Component{
  render(){
    return (
        <Welcome />
      )
  }

}

export default App;
