import React from 'react';

export const PlayableArea = (props) => {
  const style = { width: props.width, height: props.height };

  return (
    <div className="playable-area" style={style} onKeyDown={props.onKeyDown}>
      {props.children}
    </div>
  );
}
