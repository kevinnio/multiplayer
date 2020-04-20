import Socket from '../socket/client';
import GameState from '../support/GameState';

const game = new GameState();

export const setOnPlayerEntered = (position, setGameState) => {
  Socket.onPlayerEntered = data => {
    console.log('Player entered: ', data);

    Socket.notifyPlayerAcknowledged(position);

    game.addPlayer(data.id, data.position);
    setGameState(game.state());

    console.log(game.state());
  };
};

export const setOnPlayerAcknowledged = (setGameState) => {
  Socket.onPlayerAcknowledged = data => {
    console.log('Player acknowledged: ', data);

    game.addPlayer(data.id, data.position);
    setGameState(game.state());

    console.log(game.state());
  };
};

export const setOnPlayerMoved = (setGameState) => {
  Socket.onPlayerMoved = data => {
    console.log('Player moved: ', data);

    game.movePlayer(data.id, data.position);
    setGameState(game.state());

    console.log(game.state());
  };
};

export const setOnPlayerLeft = (setGameState) => {
  Socket.onPlayerLeft = data => {
    console.log('Player left: ', data);

    game.removePlayer(data.id);
    setGameState(game.state());

    console.log(game.state());
  };
};
