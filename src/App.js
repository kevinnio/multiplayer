import React, { useState, useEffect } from 'react';
import { Character } from './components/Character';
import { PlayableArea } from './components/PlayableArea';
import { updateCharPosition } from './support/character';
import Socket from './socket/client';
import {
  setOnPlayerEntered,
  setOnPlayerAcknowledged,
  setOnPlayerMoved,
  setOnPlayerLeft
} from './support/socket_listeners';

import './App.css';

const defaultPosition = { bottom: 0, left: 0 };

function App() {
  const [gameState, setGameState] = useState([]);
  const [position, setPosition] = useState(defaultPosition);

  useEffect(() => {
    setOnPlayerEntered(position, setGameState);
  }, [position]);

  useEffect(() => {
    setOnPlayerAcknowledged(setGameState);
    setOnPlayerMoved(setGameState);
    setOnPlayerLeft(setGameState);
    Socket.initialize(defaultPosition);
  }, []);

  const onKeyDown = (event) => {
    const newPosition = updateCharPosition(position, event.key);
    if (position.bottom === newPosition.bottom && position.left === newPosition.left) {
      return;
    }

    setPosition(newPosition);
    Socket.notifyPlayerMoved(newPosition);
  };

  return (
    <div className="app">
      <PlayableArea width="300px" height="300px" onKeyDown={onKeyDown}>
        <Character position={position}/>
        {gameState.map(p => <Character key={p.id} position={p.position}/>)}
      </PlayableArea>
    </div>
  );
}

export default App;
