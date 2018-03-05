import React, {Component} from 'react';

import Button from './button'
import Resources from './components/resources'

import './gameboard.css'

export default class Gameboard extends Component {
  constructor(props){
    super(props)
    this.state = {
      board: [],
      playerResources: {
        forest: 2,
        plains: 2,
        mountain: 0,
        lake: 1
      },
      tileTypes: {
        forest: 0,
        plains: 0,
        mountain: 0,
        lake: 2
      },
      landInfo: {
        plains: {
          cost: 0,
          req: {},
          yield: 1,
          cd: 5
        },
        forest: {
          cost: 1,
          req: {
            plains: 1
          },
          yield: 1,
          cd: 5
        },
        mountain: {
          cost: 3,
          req: {
            forest: 3,
            lake: 1
          },
          yield: 1,
          cd: 5
        },
        lake: {
          cost: 2,
          req: {
            forest: 2,
            plains: 2
          },
          yield: 1,
          cd: 5
        }
      },
      boardRows: 7,
      boardCol: 10,
      placeTile: 'plains',
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
  }
  componentDidMount(){
    this.resetBoard()
  }
  componentWillUnmount(){
    clearInterval(this.state.intervalId)
  }
  resetBoard(){
    clearInterval(this.state.intervalId)
    this.boardSetup(this.state.boardRows, this.state.boardCol)
    this.setupInterval()
    this.setState({timer: this.state.roundTime})
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
        placeTile: ''
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
    console.log(resourcesCopy)
    console.log(tileTypesCopy)
    for(var key in resourcesCopy){
      console.log(key)
      resourcesCopy[key] += tileTypesCopy[key]
    }
    console.log(resourcesCopy)
    console.log(tileTypesCopy)
    this.setState({
      playerResources: resourcesCopy
    })
  }

  testFunction(){
    let infoCopy = JSON.parse(JSON.stringify(this.state.landInfo))
    console.log(infoCopy)
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
        <div className='game-buttons'>
          Timer: <div id='timer'><div id='progress' style={{width: (this.state.timer / this.state.roundTime) * 100 +'%'}}></div></div>
          <Button type='plains' handleClick={this.setTile} curSel={this.state.placeTile} />
          {this.state.tileTypes.plains > 0 ? <Button type='forest' handleClick={this.setTile} curSel={this.state.placeTile}/> : null}
          <button onClick={this.pause}>{this.state.paused ? 'Resume':'Pause'}</button>
          <button onClick={this.resetBoard}>Reset</button>
          <hr/>
          <button onClick={this.testFunction}>TEST ALL THE THINGS</button>
        </div>
        <div className='play-space'>
          <div className='game-info'>
            <h1>Land Game!</h1>
            <Resources
              plains={this.state.playerResources.plains}
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
