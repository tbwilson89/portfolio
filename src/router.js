import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import Title from './components/title.js'
import About from './components/about'
import Projects from './components/projects'
import Contact from './components/contact'
import Social from './components/social'
import LandGame from './landgame/gameboard'

export default class Redirects extends Component {
  render(){
    return(
      <Router>
        <div className='App'>
          <div className='wrapper'>
            <div className='nav-container'>
              <div className='left-nav-container'>
                <Link to='/'><div className='link-btn'>Home</div></Link>
              </div>
              <div className='right-nav-container'>
                <Link to='/about'><div id='about-hover' className='link-btn'>About</div></Link>
                <div className='hover-outside-div'>
                  <div id='hover-over-this-please'>
                    <Link to='/projects'><div className='link-btn'>Projects</div></Link>
                  </div>
                  <div id='hover-test' className='test-hover'>
                    <ul>
                      <li>
                        <Link to='/projects/frontend'>
                        <span className='dropdown-section-title'>
                          <i className="fab fa-codepen"></i>
                          <h4>Frontend Projects</h4>
                        </span>
                          <p>&emsp; Projects focusing on the frontend worked on through Free Code Camp and various other tutorial websites.</p>
                        </Link>
                      </li>
                      <li>Test 2</li>
                      <li>Test 3</li>
                      <li>Test 4</li>
                    </ul>
                  </div>
                </div>
                <Link to='/contact'><div className='link-btn'>Contact</div></Link>
                <Link to='/landgame'><div className='link-btn'>Land Game</div></Link>
                <Link to='/social'><div className='link-btn'>Social Media</div></Link>

              </div>

            </div>

            <div className='display-content'>
              <Route exact path='/' component={Title}/>
              <Route path='/about' component={About}/>
              <Route path='/projects' component={Projects}/>
              <Route path='/contact' component={Contact}/>
              <Route path='/social' component={Social}/>
              <Route path='/landgame' component={LandGame}/>
            </div>
          </div>
        </div>
      </Router>
    )
  }
}
