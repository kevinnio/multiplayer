import React from 'react';

export const PlayableArea = (props) => {
  const style = { width: props.width, height: props.height };

  return (
    <div className="playable-area" tabIndex="0" style={style} onKeyDown={props.onKeyDown}>
      {props.children}
    </div>
  );
}
