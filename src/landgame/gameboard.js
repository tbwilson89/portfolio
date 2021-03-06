import React, {Component} from 'react';

import SideMenu from './components/sidemenu'
import Resources from './components/resources'
import {landInfo} from './data/landinfo'

import './gameboard.css'

export default class Gameboard extends Component {
  constructor(props){
    super(props)
    this.state = {
      board: [],
      playerResources: {
        forest: 5,
        field: 5,
        mountain: 5,
        lake: 5
      },
      tileTypes: {
        forest: 0,
        field: 0,
        mountain: 0,
        lake: 2
      },
      landInfo: landInfo,
      boardRows: 7,
      boardCol: 10,
      placeTile: '',
      paused: false,
      intervalId: '',
      timer: 10,
      roundTime: 48
    }
    this.boardSetup = this.boardSetup.bind(this)
    this.setTile = this.setTile.bind(this)
    this.adjustTile = this.adjustTile.bind(this)
    this.gatherResources = this.gatherResources.bind(this)
    this.pause = this.pause.bind(this)
    this.setupInterval = this.setupInterval.bind(this)
    this.timer = this.timer.bind(this)
    this.resetBoard = this.resetBoard.bind(this)
    this.testFunction = this.testFunction.bind(this)
    this.onKeyPress = this.onKeyPress.bind(this)
  }
  componentDidMount(){
    this.resetBoard()
    console.log(landInfo)
    document.addEventListener('keydown', (event)=>{
      const keyName = event.key
      console.log(keyName)
      switch (keyName){
        case 'ff':
          this.setTile('field')
          break;
        case 't':
          this.setTile('forest')
          break;
        case 'm':
          this.setTile('mountain')
          break;
        case 'l':
          this.setTile('lake')
          break;
        default:
          break;
      }
      this.onKeyPress(keyName)
    })
  }
  componentWillUnmount(){
    clearInterval(this.state.intervalId)
  }
  resetBoard(){
    clearInterval(this.state.intervalId)
    this.boardSetup(this.state.boardRows, this.state.boardCol)
    this.setupInterval()
    this.setState({
      timer: this.state.roundTime,
    })
  }

  setupInterval(){
    let intervalId = setInterval(this.timer, 1000)
    this.setState({
      intervalId: intervalId
    })
  }
  boardSetup(rows,cols){
    let spaces = []
    for(let i=0;i<rows;i++){
      let row = []
      for(let j=0;j<cols;j++){
        row.push({
          type: 'empty',
          units:  0,
          buildings: 'none',
          location: i+'x'+j
        })
      }
      spaces.push(row)
    }
    this.setState({
      board: spaces
    })
  }
  setTile(type){
    console.log(type)
    this.setState({placeTile: type})
  }
  adjustTile(e){
    let location = e.target.id.split('')
    let boardCopy = JSON.parse(JSON.stringify(this.state.board))
    let resourcesCopy = JSON.parse(JSON.stringify(this.state.playerResources))
    let tileTypesCopy = JSON.parse(JSON.stringify(this.state.tileTypes))

    if(this.state.placeTile !== '' && resourcesCopy[this.state.placeTile] > 0){
      boardCopy[location[0]][location[2]].type = this.state.placeTile
      resourcesCopy[this.state.placeTile] -= 1
      tileTypesCopy[this.state.placeTile] += 1

      this.setState({
        board: boardCopy,
        playerResources: resourcesCopy,
        tileTypes: tileTypesCopy,
        placeTile: '',
      })
    }
  }
  pause(){
    if(this.state.paused){
      this.setupInterval()
      this.setState({paused: false})
    } else {
      clearInterval(this.state.intervalId)
      this.setState({paused: true})
    }
  }
  timer(){
    if(this.state.timer > 1){
      let newTime = this.state.timer - 1
      this.setState({timer: newTime})
    } else if (this.state.timer === 1){
      this.gatherResources()
      this.setState({timer: 0})
    } else {
      this.setState({timer: this.state.roundTime})
    }
  }
  gatherResources(){
    let resourcesCopy = JSON.parse(JSON.stringify(this.state.playerResources))
    let tileTypesCopy = JSON.parse(JSON.stringify(this.state.tileTypes))
    for(var key in resourcesCopy){
      resourcesCopy[key] += tileTypesCopy[key]
    }
    this.setState({
      playerResources: resourcesCopy
    })
    console.log(resourcesCopy)
  }

  testFunction(){
    let infoCopy = JSON.parse(JSON.stringify(this.state.landInfo))
    console.log(infoCopy)
    console.log(this.state.landInfo)
  }
  onKeyPress(key){
    if(key === 'p'){
      this.setTile('field')
    }
  }

  render(){
    let spaces = this.state.board.map((row, i)=>{
      row = row.map((tile)=>{
        let tileClass = `tile ${tile.type}`
        return (<div className={tileClass} id={tile.location} onClick={this.adjustTile} key={tile.location}></div>)
      })
      return (
        <div className='board-row' key={i}>
          {row}
        </div>
      )
    })

    return(
      <div className='land-game'>
        <SideMenu
          data={this.state.landInfo}
          tileTypes={this.state.tileTypes}
          timer={this.state.timer}
          roundTime={this.state.roundTime}
          paused={this.state.paused}
          onPause={this.pause}
          onReset={this.resetBoard}
          onSetTile={this.setTile}
          onTest={this.testFunction}
          curSel={this.state.placeTile}
        />
        <div className='play-space'>
          <div className='game-info'>
            <h1>Land Game!</h1>
            <Resources
              field={this.state.playerResources.field}
              forest={this.state.playerResources.forest}
              mountain={this.state.playerResources.mountain}
              lake={this.state.playerResources.lake}
            />
          </div>

          <div className='game-board'>
            {spaces}
          </div>
        </div>
      </div>
    )
  }
}
