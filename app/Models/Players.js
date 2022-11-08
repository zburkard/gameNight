export class Player {
  constructor(name, points, favoriteColor) {
    this.name = name
    this.points = points
    this.favoriteColor = favoriteColor
  }


  get Template() {
    return `
    <div class="col-4 card">
          <h3 class="danger">${this.name}</h3>
          <h3 class="primary">${this.points}</h3>
          <h3 class="primary">${this.favoriteColor}</h3>
          <button class="btn" onclick="app.playersController.scorePoint('${this.name}')">Click</button>
    </div>

    `
  }

}