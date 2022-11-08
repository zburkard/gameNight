import { appState } from "../AppState.js";
import { Player } from "../Models/Players.js";

class PlayersService {

  scorePoint(name) {
    let player = appState.players.find(p => p.name == name)
    player.points ++
  }

  createPlayer(playerData){
    let newPlayer = new Player(playerData.name, playerData.points, playerData.favoriteColor)
    appState.players.push(newPlayer)
  }

}


export const playersService = new PlayersService()