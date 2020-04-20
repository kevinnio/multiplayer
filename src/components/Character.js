import React from 'react';

export const Character = (props) => {
  const { bottom, left } = props.position;

  return (
    <div className="character" style={{ bottom, left }}>
      <span role="img" aria-label="char">🚶🏻‍♀️</span>
    </div>
  );
};
