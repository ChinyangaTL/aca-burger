import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Filling = ({ id, type, backgroundColor, removeLayer }) => {
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
      onClick={() => removeLayer(id)}
      className="burger-piece"
      style={{
        backgroundColor: `${backgroundColor}`,
      }}
    >
      <h3>{type}</h3>
    </motion.div>
  );
};

export default Filling;
