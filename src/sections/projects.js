import React, { Component } from 'react';
import urlshorten from '../images/urlshorten.PNG'

import FEProjects from './feprojects.js'
import BEProjects from './beprojects.js'
import PersonalProjects from './personalprojects.js'

class Projects extends Component {

  constructor (props) {
    super(props)
    this.state = {
      selected: 'frontend'
    }
  }

  changeActive (newActive) {
    this.setState({selected : newActive})
  }
  isActive (val) {
    return 'project-tab ' +((val === this.state.selected) ? 'active-tab':'default')
  }

  render(){
    console.log(this.state.selected)
    if(this.state.selected === 'frontend'){
      return(
        <div className='project-wrapper section-border'>
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
          <FEProjects />
        </div>
      )
    } else if (this.state.selected === 'backend'){
      return(
        <div className='project-wrapper section-border'>
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
          <div id='fcc-backend-wrapper'>
            <div className='portfolio-display-backend'>
              <a href='https://blooming-oasis-62929.herokuapp.com/'><img src={urlshorten} alt='URL shortener Project'></img></a>
              <p>Taking in a full HTTP URL (EX: HTTP://www.google.com) and converting it into a shorter URL by adding the url to a database and associating it with a number. Once done it displays this information to be used to translate the number and redirect.</p>
              <p>When accessing the new short URL, it checks the number to the database and redirects the user to the webpage associated with the number.</p>
            </div>
            <div className='portfolio-display-backend'>
              <a href='https://blooming-sands-60050.herokuapp.com/'>Timestamp Project</a>
              <p>A project used to convert time from regular date to unix or from unix to a regular date.</p>
            </div>
            <div className='portfolio-display-backend'>
              <a href='https://warm-wave-60757.herokuapp.com/'>Request Header Project</a>
              <p>A project learning about pulling information from the person visiting the webpage and displaying it. The webpage displays the IP Address, language and operating system of the current user.</p>
            </div>
          </div>
          <BEProjects />
        </div>
      )
    } else if (this.state.selected === 'personal'){
      console.log('it works!')
      return(
        <div className='project-wrapper section-border'>
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
          <PersonalProjects />
        </div>
      )
    } else {
      return(
        <div className='project-wrapper section-border'>
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
        </div>
      )
    }
  }
}

export default Projects
