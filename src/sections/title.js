import React, { Component } from 'react'

class Title extends Component {
  scrollTo(scrollId){
    console.log('Scroll To Works!')
    document.querySelector(scrollId).scrollIntoView({
      behavior: 'smooth'
    });
  }

  render(){
    return(
      <div id='top-section-wrapper' style={{height: screen.availHeight}}>
        <div className='top-section-fade'>
          <div className='top-content'>
            <h1>Name</h1>
            <h3>Website Visionary</h3>
            <div id='quicklinks'>
              <span><a href='#' onClick={this.scrollTo(.description)}>&lt; Who? &gt;</a></span>
              <span><a href='#history'>&lt; History &gt;</a></span>
              <span><a href='#projects'>&lt; Projects &gt;</a></span>
              <span><a href='#'>&lt; Contact &gt;</a></span>
              <span><a href='#'>&lt; Social Links &gt;</a></span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Title;
