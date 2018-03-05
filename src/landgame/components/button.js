import React, { Component } from 'react';

import './button.css'

export default class Button extends Component {
  constructor(props){
    super(props)
    this.state = {
      cd: 0,
      timer: 0,
      intervalId: ''
    }
    this.setCD = this.setCD.bind(this)
    this.cooldown = this.cooldown.bind(this)
  }
  componentDidMount(){
    console.log(this.props)
    this.setState({cd: this.props.type.cd})
  }
  setCD(){
    this.props.handleClick(this.props.type.name)
    let intervalId = setInterval(this.cooldown, 1000)
    this.setState({intervalId, timer: this.state.cd})
  }
  cooldown(){
    console.log('CD Is working')
    if(this.state.timer > 1){
      let newTime = this.state.timer - 1
      this.setState({timer: newTime})
    } else if (this.state.timer === 1){
      this.setState({timer: 0})
    } else {
      clearInterval(this.state.intervalId)
    }
  }
  render(){
    let bgColor = this.props.curSel === this.props.type.name ? 'green':'purple'
    return(
      <div
        className='game-btn'
        style={{backgroundColor: bgColor}}
        onClick={() => this.props.handleClick(this.props.type.name)}>
        {this.props.type.name}
      </div>
    )
  }
}

// const Button = ({type, handleClick, curSel}) => {
//   let bgColor = curSel === type ? 'green':'purple'
//   return (
//     <div className='game-btn' style={{backgroundColor: bgColor}} onClick={() => handleClick(type)}>{type}</div>
//   )
// }
