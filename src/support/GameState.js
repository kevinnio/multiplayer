export default class GameState {
  constructor() {
    this.players = {};
  }

  addPlayer(id, position) {
    if (this.findPlayer(id)) {
      console.log('Player was already in game!');
      return;
    }

    this.players[id] = { position };
  }

  removePlayer(id) {
    delete this.players[id];
  }

  movePlayer(id, position) {
    this.findPlayer(id).position = position;
  }

  findPlayer(id) {
    return this.players[id];
  }

  otherPlayers(id) {
    const players = { ...this.players };
    delete players[id];
    return players;
  }

  state() {
    const state = [];

    for(let id in this.players) {
      state.push({ id: id, position: this.players[id].position });
    }

    return state;
  }
}
