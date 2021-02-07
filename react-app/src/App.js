import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const status = require('minecraft-server-status');

var info;

status('avaeroh.hopto.org', 25565, response => {
info=JSON.stringify(response);
console.log(info);
})

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Avaeroh's Webapp</h2>
        <p className="App-intro">
        {info}
        </p>
       </div>
       <div>{console.log(info)}</div>
      </div>
    );
  }
}

export default App;
