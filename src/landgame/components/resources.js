import React from 'react';

const Resources = (props) => {
  return (
    <span>
      Plains: {props.plains}
      {props.forest > 0 ? ` Forest: ${props.forest}`:''}
      {props.mountain > 0 ? ` Mountain: ${props.mountain}`:''}
      {props.lake > 0 ? ` Lake: ${props.lake}`:''}
    </span>
  )
}

export default Resources
