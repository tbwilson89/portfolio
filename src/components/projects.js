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
        <Link to={`${match.url}/frontend`}><p className='perspective'><div className='btn project-link-btn'>Front End Projects</div></p></Link>
        <Link to={`${match.url}/backend`}><p className='perspective'><div className='btn project-link-btn'>Back End Projects</div></p></Link>
        <Link to={`${match.url}/personal`}><p className='perspective'><div className='btn project-link-btn'>Personal Projects</div></p></Link>
      </div>
      <div className='projects-display'>
        <Route path={`${match.url}/frontend`} component={Frontend}/>
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
