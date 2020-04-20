import io from 'socket.io-client';

let socket;

const Socket = {
  initialize: (position) => {
    socket = io('http://localhost:3001');

    socket.on('player-entered', data => Socket.onPlayerEntered(data));
    socket.on('player-acknowledged', data => Socket.onPlayerAcknowledged(data));
    socket.on('player-moved', data => Socket.onPlayerMoved(data));
    socket.on('player-left', data => Socket.onPlayerLeft(data));

    socket.emit('player-entered', position);
  },

  notifyPlayerMoved: (position) => {
    socket.emit('player-moved', { bottom: position.bottom, left: position.left });
  },

  notifyPlayerAcknowledged: (position) => {
    socket.emit('player-acknowledged', position);
  },

  onPlayerEntered: data => console.log('Player entered: ', data),
  onPlayerAcknowledged: data => console.log('Player acknowledged: ', data),
  onPlayerMoved: data => console.log('Player moved: ', data),
  onPlayerLeft: data => console.log('Player left: ', data),
};

export default Socket;
