import React, { Component } from 'react'

class Title extends Component {

  render(){
    return(
      <div className='top-section-wrapper'>
        <div className='home-content'>
          <h1>Trevor Wilson</h1>
          <h3>Web Development</h3>
          <div id='quicklinks'>
            <div className='resp-break'>
              <span id='wholink' onClick={() => this.props.handleClick('about')}>&lt; About &gt;</span>
              <span id='projectlink'><a href='#section2' onClick={() => this.props.handleClick('projects')}>&lt; Projects &gt;</a></span>
            </div>
            <div className='resp-break'>
              <span id='contactlink'><a href='#section3' onClick={() => this.props.handleClick('contact')}>&lt; Contact &gt;</a></span>
              <span id='sociallink'><a href='#section4' onClick={() => this.props.handleClick('social')}>&lt; Social Links &gt;</a></span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Title;
