import React, { Component } from 'react';
import logo from './images/flashbang.png';
import './App.css';
const status = require('minecraft-server-status');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onlineStatus: ""
    };
  }

  getStatus = () => {
    status('avaeroh.hopto.org', 25565, response => {
      console.log(response)
      var state = response.online
      var playerCount = JSON.stringify(response.players.now)
      if (state == true) {
        this.setState({
          onlineStatus: "The server is online with " + playerCount + " players currently playing!"
        })
      } else {
        this.setState({
          onlineStatus: "The server is offline."
        })
      }
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Avaeroh's server status</h2>
          <p className="App-intro">
            <button onClick={this.getStatus}>Get/refresh server details</button>
            
          </p>
        </div>
        <div className="body">{this.state.onlineStatus}</div>
      </div>
    );
  }
}

export default App;
