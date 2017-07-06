import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import Title from './components/title.js'
import About from './components/about'
import Projects from './components/projects'
import Contact from './components/contact'
import Social from './components/social'

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
                <Link to='/about'><div className='link-btn'>About</div></Link>
                <Link to='/projects'><div className='link-btn'>Projects</div></Link>
                <Link to='/contact'><div className='link-btn'>Contact</div></Link>
                <Link to='/social'><div className='link-btn'>Social Media</div></Link>
              </div>
            </div>
            <div className='display-content'>
              <Route exact path='/' component={Title}/>
              <Route path='/about' component={About}/>
              <Route path='/projects' component={Projects}/>
              <Route path='/contact' component={Contact}/>
              <Route path='/social' component={Social}/>
            </div>
          </div>
        </div>
      </Router>
    )
  }
}
