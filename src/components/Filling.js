import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Filling = ({ type, backgroundColor }) => {
  const [isVisible, setIsVisible] = useState(true);
  const makeVanish = () => {
    setIsVisible(false);
  };
  return (
    <motion.div
      whileHover={{
        scale: 0.9,
      }}
      onClick={makeVanish}
      className="burger-piece"
      style={{
        backgroundColor: `${backgroundColor}`,
        display: `${isVisible ? '' : 'none'}`,
      }}
    >
      <h3>{type}</h3>
    </motion.div>
  );
};

export default Filling;
