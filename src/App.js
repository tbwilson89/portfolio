import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './sections/title'
import Description from './sections/shortdesc'
import History from './sections/history'
import Projects from './sections/projects'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title />
        <Description />
        <History />
        <Projects />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App
