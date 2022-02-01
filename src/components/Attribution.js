import { motion } from 'framer-motion';
import React from 'react';

const Attribution = () => {
  return (
    <motion.div
      initial={{ y: '-100vh' }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, delay: 2 }}
    >
      <p>
        Built by <a href="https://github.com/ChinyangaTL">Les Chinyanga</a> for
        Africa Code Academy
      </p>
    </motion.div>
  );
};

export default Attribution;
