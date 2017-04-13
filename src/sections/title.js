import React, { Component } from 'react'

class Title extends Component {

  render(){
    return(
      <div id='top-section-wrapper' className='section-border' style={{height: screen.availHeight}}>
        <div className='top-content'>
          <h1>Trevor Wilson</h1>
          <h3>Web Development</h3>
          <div id='quicklinks'>
            <div className='resp-break'>
              <span id='wholink'><a href='#section1'>&lt; About &gt;</a></span>
              <span id='projectlink'><a href='#section2'>&lt; Projects &gt;</a></span>
            </div>
            <div className='resp-break'>
              <span id='contactlink'><a href='#section3'>&lt; Contact &gt;</a></span>
              <span id='sociallink'><a href='#section4'>&lt; Social Links &gt;</a></span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Title;
