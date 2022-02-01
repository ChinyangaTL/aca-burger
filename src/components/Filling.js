import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Filling = ({ type, backgroundColor }) => {
  const [isVisible, setIsVisible] = useState(true);
  const makeVanish = () => {
    setIsVisible(false);
  };
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.4 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9 }}
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
