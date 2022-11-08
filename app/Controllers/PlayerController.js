import { appState } from "../AppState.js"
import { playersService } from "../Services/PlayerService.js"


export class PlayersController {
  constructor() {
    console.log(appState.players)
  }


  // drawPlayers() {
  //   appState.players.forEach(p => template += p.name)
  //   document.getElementById('app').innerText = p.name
  // }



  // scorePoint(name) {
  //   playersService.scorePoint(name)
  //   this.drawPlayers()
  // }

}