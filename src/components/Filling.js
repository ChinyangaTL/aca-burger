import React from 'react';

const Filling = ({ type, backgroundColor }) => {
  return (
    <div className="burger-piece" style={{ backgroundColor }}>
      <h3>{type}</h3>
    </div>
  );
};

export default Filling;
