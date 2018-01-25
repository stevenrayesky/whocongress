import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CongressContainer from './components/CongressContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
        <h1>Who Congress</h1>
        </header>
        <CongressContainer />
      </div>
    );
  }
}

export default App;
