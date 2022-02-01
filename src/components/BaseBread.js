import { motion } from 'framer-motion';
import React from 'react';

const BaseBread = ({ styling }) => {
  return (
    <motion.div
      className="burger-piece bottom-slice"
      style={styling}
      initial={{ x: '100vw' }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
    >
      <h3>base bread</h3>
    </motion.div>
  );
};

export default BaseBread;
