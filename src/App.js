import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'
import './App.css';
import Title from './sections/title'
import About from './sections/about'
import Projects from './sections/projects'
import Contact from './sections/contact'
import SocialLinks from './sections/social'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='content-wrapper'>
          <Title />
          <ScrollableAnchor id={'section1'}>
            <About />
          </ScrollableAnchor>
          <ScrollableAnchor id={'section2'}>
            <Projects />
          </ScrollableAnchor>
          <ScrollableAnchor id={'section3'}>
            <Contact />
          </ScrollableAnchor>
          <ScrollableAnchor id={'section4'}>
            <SocialLinks />
          </ScrollableAnchor>
        </div>
      </div>
    );
  }
}

export default App
