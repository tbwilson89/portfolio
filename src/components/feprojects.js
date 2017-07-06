import React, { Component } from 'react';
import Codepen from 'react-codepen'

const FEProjects = ({ match }) => {
  return(
    <div id='fcc-frontend-wrapper' className='portfolio-section'>
      <div>
        {match.params.projectId}
      </div>
      <div className='portfolio-display-row'>
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
      </div>
    </div>
  )
}

export default FEProjects
