import React from 'react';
// import Codepen from 'react-codepen'
import {Route, Link} from 'react-router-dom'

import Simon from './feprojects/simon'
import Tictactoe from './feprojects/tictactoe'
import Pomodoro from './feprojects/pomodoro'
import TwitchAPI from './feprojects/twitchapi'
import Weather from './feprojects/weather'
import Markdown from './feprojects/markdown'
import RandomQuote from './feprojects/randomquote'
import WikiFinder from './feprojects/wikifinder'


const projects = [
  {url: 'Simon', comp: Simon},
  {url: 'Tictactoe', comp: Tictactoe},
  {url: 'Pomodoro', comp: Pomodoro},
  {url: 'TwitchAPI', comp: TwitchAPI},
  {url: 'Weather', comp: Weather},
  {url: 'Markdown', comp: Markdown},
  {url: 'RandomQuote', comp: RandomQuote},
  {url: 'WikiFinder', comp: WikiFinder}
]

const FEProjects = ({ match }) => {
  const links = []
  const routes = []
  for(let i=0;i<projects.length;i++){
    links.push(<Link to={`${match.url}/${projects[i].url}`} key={projects[i].url}>
      <div className='fe-links'>{projects[i].url}</div>
    </Link>)
    routes.push(<Route path={`${match.url}/${projects[i].url}`} component={projects[i].comp} key={projects[i].url}/>)
  }
  return(
    <div id='fcc-frontend-wrapper' className='portfolio-section'>
      <div className='fe-project-links'>
        {links}
      </div>
      <div className='fe-project-display'>
        {routes}
      </div>
    </div>
  )
}

export default FEProjects
