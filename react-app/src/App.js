import React, { useState, Component } from 'react';
import logo from './logo.svg';
import './App.css';
const status = require('minecraft-server-status');

const getStatus = function() {status('avaeroh.hopto.org', 25565, response => {
console.log(response)
this.setState({
 onlineStatus: response
})
})}

class App extends Component {
 constructor(props) {
  super(props);
  this.state = {
   onlineStatus: "default"
  };
 }

getStatus = () =>  {status('avaeroh.hopto.org', 25565, response => {
console.log(response)
this.setState({
 onlineStatus: JSON.stringify(response)
})
})}



  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Avaeroh's Webapp</h2>
        <p className="App-intro">
        <button onClick={this.getStatus}>Click me!</button>
        {this.state.onlineStatus}  
      </p>
       </div>
      </div>
    );
  }
}

export default App;
