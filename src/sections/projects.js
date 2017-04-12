import React, { Component } from 'react';

class Projects extends Component {
  render(){
    return(
      <div className='project-wrapper section-border' style={{height: screen.availHeight}}>
        <div className='fcc-projects-wrapper'>
          This is where Free Code Camp Projects will be listed.
        </div>
        <div className='personal-projects-wrapper'>
          This is where personal projects will go.
        </div>
      </div>
    )
  }
}

export default Projects
