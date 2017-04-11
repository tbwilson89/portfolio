import React, { Component } from 'react'

class Title extends Component {

  render(){
    return(
      <div id='top-section-wrapper' className='section-border' style={{height: screen.availHeight}}>
        <div className='top-section-fade'>
          <div className='top-content'>
            <h1>Name</h1>
            <h3>Website Visionary</h3>
            <div id='quicklinks'>
              <span class='resp-break'>
              <span id='wholink'><a href='#section1'>&lt; Who? &gt;</a></span>
              <span id='historylink'><a href='#section2'>&lt; History &gt;</a></span>
              <span id='projectlink'><a href='#section3'>&lt; Projects &gt;</a></span>
              </span>
              <span class='resp-break'>
              <span id='contactlink'><a href='#section4'>&lt; Contact &gt;</a></span>
              <span id='sociallink'><a href='#section5'>&lt; Social Links &gt;</a></span>
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Title;
