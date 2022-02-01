import React from 'react';
import { motion } from 'framer-motion';

const TopBread = ({ styling }) => {
  return (
    <motion.div
      className="burger-piece top-slice"
      style={styling}
      initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
    >
      <h3>top bread</h3>
    </motion.div>
  );
};

export default TopBread;
