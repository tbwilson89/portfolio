import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Title extends Component {

  render(){
    return(
      <div className='top-section-wrapper'>
        <div className='home-content'>
          <h1>Trevor Wilson</h1>
          <h3>Web Development</h3>
          <div id='quicklinks'>
            <div className='resp-break'>
              <Link to='/about'><span id='wholink'>&lt; About &gt;</span></Link>
              <Link to='/projects'><span id='projectlink'>&lt; Projects &gt;</span></Link>
            </div>
            <div className='resp-break'>
              <Link to='/contact'><span id='contactlink'>>&lt; Contact &gt;</span></Link>
              <Link to='/social'><span id='sociallink'>&lt; Social Links &gt;</span></Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Title;
