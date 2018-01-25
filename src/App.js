import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CongressContainer from './components/CongressContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <img src={logo} className="logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <CongressContainer />
      </div>
    );
  }
}

export default App;
