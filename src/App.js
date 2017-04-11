import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'
import logo from './logo.svg';
import './App.css';
import Title from './sections/title'
import Description from './sections/shortdesc'
import History from './sections/history'
import Projects from './sections/projects'
import Contact from './sections/contact'
import SocialLinks from './sections/social'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title />
        <ScrollableAnchor id={'section1'}>
          <Description />
        </ScrollableAnchor>
        <ScrollableAnchor id={'section2'}>
          <History />
        </ScrollableAnchor>
        <ScrollableAnchor id={'section3'}>
          <Projects />
        </ScrollableAnchor>
        <ScrollableAnchor id={'section4'}>
          <Contact />
        </ScrollableAnchor>
        <ScrollableAnchor id={'section5'}>
          <SocialLinks />
        </ScrollableAnchor>
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
