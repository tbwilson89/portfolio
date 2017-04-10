import React, { Component } from 'react'

class Description extends Component {
  render() {
    return (
      <div className='desc-wrapper description' style={{height: screen.availHeight}}>
        <div className='desc-picture-left'>
        </div>
        <div className='description'>
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
    )
  }
}

export default Description
