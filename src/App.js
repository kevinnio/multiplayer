import React, { useState } from 'react';
import { Character } from './components/Character';
import { PlayableArea } from './components/PlayableArea';
import { updateCharPosition } from './support/character';

import './App.css';

function App() {
  const [charPosition, setCharPosition] = useState({ bottom: 0, left: 0});
  const onKeyDown = (event) => {
    setCharPosition(updateCharPosition(charPosition, event.key));
  };

  return (
    <div className="app" tabIndex="0" onKeyDown={onKeyDown}>
      <PlayableArea width="300px" height="300px">
        <Character position={charPosition} />
      </PlayableArea>
    </div>
  );
}

export default App;
