import React from 'react';
import {Route, Link} from 'react-router-dom'

//import urlshorten from '../images/urlshorten.PNG'

import Frontend from './feprojects.js'
import Backend from './beprojects.js'
import Personal from './personalprojects.js'


const Projects = ({ match }) => {
  return (
    <div className='project-wrapper'>
      <div className='projects-nav'>
        <Link to={`${match.url}/frontend/testing`}><div className='link-btn'>Front End Projects</div></Link>
        <Link to={`${match.url}/backend`}><div className='link-btn'>Back End Projects</div></Link>
        <Link to={`${match.url}/personal`}><div className='link-btn'>Personal Projects</div></Link>
      </div>
      <div className='projects-display'>
        <Route path={`${match.url}/frontend/:projectId`} component={Frontend}/>
        <Route path={`${match.url}/backend`} component={Backend}/>
        <Route path={`${match.url}/personal`} component={Personal}/>
        <Route exact path={match.url} render={() => (
          <h3>Please Select a Section!</h3>
        )}/>
      </div>
    </div>
  )
}

export default Projects
