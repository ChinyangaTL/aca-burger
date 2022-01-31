import React, { useState } from 'react';

const Filling = ({ type, backgroundColor }) => {
  const [isVisible, setIsVisible] = useState(true);
  const makeVanish = () => {
    setIsVisible(false);
  };
  return (
    <div
      data-i
      onClick={makeVanish}
      className="burger-piece"
      style={{
        backgroundColor: `${backgroundColor}`,
        display: `${isVisible ? '' : 'none'}`,
      }}
    >
      <h3>{type}</h3>
    </div>
  );
};

export default Filling;
