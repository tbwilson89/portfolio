import React, { Component } from 'react';

class Projects extends Component {

  constructor (props) {
    super(props)
    this.state = {
      selected: 'frontend'
    }
  }

  changeActive (newActive) {
    this.setState({selected : newActive})
    switch(newActive) {
      case 'frontend':
        document.getElementById('fcc-frontend-wrapper').style.display = 'inline'
        document.getElementById('fcc-backend-wrapper').style.display = 'none'
        document.getElementById('personal-projects-wrapper').style.display = 'none'
        break;
      case 'backend':
        document.getElementById('fcc-frontend-wrapper').style.display = 'none'
        document.getElementById('fcc-backend-wrapper').style.display = 'inline'
        document.getElementById('personal-projects-wrapper').style.display = 'none'
        break;
      case 'personal':
        document.getElementById('fcc-frontend-wrapper').style.display = 'none'
        document.getElementById('fcc-backend-wrapper').style.display = 'none'
        document.getElementById('personal-projects-wrapper').style.display = 'inline'
        break;
      default:
        break;
    }
  }
  isActive (val) {
    return 'project-tab ' +((val === this.state.selected) ? 'active-tab':'default')
  }

  render(){
    return(
      <div className='project-wrapper section-border' style={{height: screen.availHeight}}>
        <div className='projects-tab-wrapper'>
          <div id='fcc-frontend-tab' className={this.isActive('frontend')} onClick={(e) => this.changeActive('frontend')}>
            Free Code Camp: Front End Projects
          </div>
          <div id='fcc-backend-tab' className={this.isActive('backend')} onClick={(e) => this.changeActive('backend')}>
            Free Code Camp: Back End Projects
          </div>
          <div id='learning-projects-tab' className={this.isActive('personal')} onClick={(e) => this.changeActive('personal')}>
            Personal Learning Projects
          </div>
        </div>

        <div id='fcc-frontend-wrapper'>
          This is where Free Code Camp Frontend Projects will be listed.
        </div>
        <div id='fcc-backend-wrapper'>
          This is where Free Code Camp Backend Projects with be listed.
        </div>
        <div id='personal-projects-wrapper'>
          This is where personal projects will go.
        </div>
      </div>
    )
  }
}

export default Projects
