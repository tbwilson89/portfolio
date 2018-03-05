export function resetBoard(){
  clearInterval(this.state.intervalId)
  this.boardSetup(this.state.boardRows, this.state.boardCol)
  this.setupInterval()
  this.setState({timer: this.state.roundTime})
}
export function setupInterval(){
  let intervalId = setInterval(this.timer, 1000)
  this.setState({
    intervalId: intervalId
  })
}
export function boardSetup(rows,cols){
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
export function setTile(type){
  this.setState({placeTile: type})
}
export function adjustTile(e){
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
export function pause(){
  if(this.state.paused){
    this.setupInterval()
    this.setState({paused: false})
  } else {
    clearInterval(this.state.intervalId)
    this.setState({paused: true})
  }
}
export function timer(){
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
export function gatherResources(){
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

export function testFunction(){
  console.log('Does this work?')
}
