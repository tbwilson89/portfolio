import React, {Component} from 'react';

import Button from './button'

export default class SideMenu extends Component {
  constructor(props){
    super(props)
    this.createLandButtons = this.createLandButtons.bind(this)
  }
  createLandButtons(data){
    //data = this.state.landInfo (contains objects for each land)
    let buttons = []
    let makeButton = true;
    for(let key in data){
      //Keys are each land that has an object in data
      for(let type in data[key].req){
        //Each type is something that has a requirement for this button to appear
        console.log(`PRes ${type}: ${this.props.tileTypes[type]} Req ${data[key].req[type]}`)
        if(this.props.tileTypes[type] >= data[key].req[type]){
          console.log('TRUE!')
        } else {
          console.log(data[key].name)
          makeButton = false;
        }
      }
      if(makeButton){
        let newButton =
        <Button
          type={data[key]}
          handleClick={()=>this.props.onSetTile(data[key].name)}
          curSel={this.props.curSel}
          key={data[key].name}
        />
        buttons.push(newButton)
      }
      makeButton = true
    }
    console.log(buttons)
    return buttons
  }

  render(){
    let landButtons = this.createLandButtons(this.props.data)
    return(
      <div className='game-buttons'>
        Timer: <div id='timer'>
          <div id='progress' style={{width: (this.props.timer / this.props.roundTime) * 100 +'%'}}></div>
        </div>
        {landButtons}
        <button onClick={()=>this.props.onPause()}>{this.props.paused ? 'Resume':'Pause'}</button>
        <button onClick={()=>this.props.onReset()}>Reset</button>
        <hr/>
        <button onClick={()=>this.props.onTest()}>TEST ALL THE THINGS TWO</button>
      </div>
    )
  }
}
