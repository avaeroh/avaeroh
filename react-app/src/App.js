import React, { useState, Component } from 'react';
import logo from './logo.svg';
import './App.css';
const status = require('minecraft-server-status');

class App extends Component {
 constructor(props) {
  super(props);
  this.state = {
   onlineStatus: ""
  };
 }

getStatus = () =>  {status('avaeroh.hopto.org', 25565, response => {
console.log(response)
var state=response.online
var playerCount=JSON.stringify(response.players)
if (state==true) {
this.setState({
 onlineStatus: "The server is online with " + playerCount + " currently playing!"
})

}
})}



  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Avaeroh's Webapp</h2>
        <p className="App-intro">
        <button onClick={this.getStatus}>Get/refresh server details</button>
       {this.state.onlineStatus}  
      </p>
       </div>
      </div>
    );
  }
}

export default App;
