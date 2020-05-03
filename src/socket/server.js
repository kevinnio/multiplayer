const server = require('http').createServer();
const io = require('socket.io')(server);

io.on('connection', socket => {
  socket.on('player-entered', data => {
    socket.broadcast.emit('player-entered', { id: socket.id, position: data });
  });

  socket.on('disconnect', () => {
    socket.broadcast.emit('player-left', { id: socket.id });
  });

  socket.on('player-acknowledged', data => {
    socket.broadcast.emit('player-acknowledged', { id: socket.id, position: data });
  });

  socket.on('player-moved', data => {
    socket.broadcast.emit('player-moved', { id: socket.id, position: data });
  });
});

server.listen(process.env.PORT || 3001);
