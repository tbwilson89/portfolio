import React from 'react';

import './button.css'

const Button = ({type, handleClick, curSel}) => {
  let bgColor = curSel === type ? 'green':'purple'
  return (
    <div className='game-btn' style={{backgroundColor: bgColor}} onClick={() => handleClick(type)}>{type}</div>
  )
}

export default Button
