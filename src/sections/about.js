import React, { Component } from 'react'
import AboutOne from '../images/laptopgrey.jpg'
import AboutTwo from '../images/techmb.jpg'

class Description extends Component {
  render() {
    return (
      <div className='about-section-wrapper section-border'>
        <div className='about-row'>
          <div className='about-box-left'>
            <img src={AboutOne} alt='AboutOne'></img>
          </div>
          <div className='about-box-right'>
            <h3>What is this? Is it working?</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Aliquam nec nunc ac purus facilisis tempus at consequat ipsum.
              Curabitur vitae fringilla velit. Cras elementum mauris nibh, non
              luctus felis pretium vitae. Aliquam erat volutpat. Nullam sed
              turpis lorem. Vestibulum maximus maximus sagittis. Pellentesque
              nibh leo, vestibulum nec felis a, ornare sodales odio. Morbi eget
              accumsan augue. Nullam ornare, tellus sed pharetra dapibus, odio
              sem bibendum justo, vitae egestas ex justo ut massa. Fusce
              porttitor libero quis est porta dignissim. Nullam facilisis magna
              sit amet purus viverra pharetra. Fusce finibus felis turpis. Morbi
              nec eros at ligula eleifend congue.</p>
          </div>
        </div>
        <div className='about-row'>
          <div className='about-box-left'>
            This is on the left at large screen size.
          </div>
          <div className='about-box-right'>
            <img src={AboutTwo} alt='Abouttwo'></img>
          </div>
        </div>
      </div>
    )
  }
}

export default Description
