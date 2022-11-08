import { appState } from "../AppState.js"
import { playersService } from "../Services/PlayerService.js"


export class PlayersController {
  constructor() {
    console.log(appState.players)
    this.drawPlayers()

  }


  drawPlayers() {
    console.log('drawing characters')
    let template = ''
    appState.players.forEach(p => template += p.Template)
    document.getElementById('players').innerHTML = template
  }



  scorePoint(name) {
    console.log(name , 'is scoring')
    playersService.scorePoint(name)
    this.drawPlayers()
  }

  createPlayer(){
    window.event.preventDefault()
    console.log('creating player')

    const form = window.event.target

    console.log(form.name.value, form.points.value, form.favoriteColor.value);
    let playerData = {
      name: form.name.value,
      points: form.points.value,
      favoriteColor: form.favoriteColor.value
    }
    console.log(playerData, 'player data')
    playersService.createPlayer(playerData)
    form.reset()
    this.drawPlayers()
  }


}