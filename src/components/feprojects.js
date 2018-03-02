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
  console.log(projects[0].comp)
  for(let i=0;i<projects.length;i++){
    links.push(<Link to={`${match.url}/${projects[i].url}`}>{projects[i].url}</Link>)
    routes.push(<Route path={`${match.url}/${projects[i].url}`} component={projects[i].comp}/>)
  }
  return(
    <div id='fcc-frontend-wrapper' className='portfolio-section'>
      <div>
        {match.params.projectId}
      </div>
      {links}
      {routes}
      {/* <Route path={`${match.url}/Simon`} component={Simon}/> */}
      {/* <div className='portfolio-display-row'>
        <div className='portfolio-display-box'>
          <Codepen user="tbwilson89" hash="mRmrJx"></Codepen>
        </div>
        <div className='portfolio-display-box'>
          <Codepen user="tbwilson89" hash="dNXdwJ"></Codepen>
        </div>
        <div className='portfolio-display-box'>
          <Codepen user="tbwilson89" hash="xgxqYz"></Codepen>
        </div>
      </div>
      <div className='portfolio-display-row'>
        <div className='portfolio-display-box'>
          <Codepen user="tbwilson89" hash="xRmBEx"></Codepen>
        </div>
        <div className='portfolio-display-box'>
          <Codepen user="tbwilson89" hash="YpRGjM"></Codepen>
        </div>
        <div className='portfolio-display-box'>
          <Codepen user="tbwilson89" hash="apGrwR"></Codepen>
        </div>
      </div>
      <div className='portfolio-display-row'>
        <div className='portfolio-display-box'>
          <Codepen user="tbwilson89" hash="bBmKOK"></Codepen>
        </div>
        <div className='portfolio-display-box'>
          <Codepen user="tbwilson89" hash="ZBVXNm"></Codepen>
        </div>
      </div> */}
    </div>
  )
}

export default FEProjects
