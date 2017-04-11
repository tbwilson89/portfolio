import React, { Component } from 'react'

class SocialLinks extends Component {
  render(){
    return(
      <div className='social-wrapper section-border' style={{height: screen.availHeight}}>
        <div className='social-section-box'>
          <span>Facebook</span>
          <span>Github</span>
          <span>LinkedIn</span>
        </div>
      </div>
    )
  }
}

export default SocialLinks
