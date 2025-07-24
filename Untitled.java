import React from 'react';
import { motion } from 'framer-motion';

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ padding: '2rem' }}
    >
      <h1>Welcome to the IT Department</h1>
      <p>This is the official website of the IT Department at XYZ College.</p>
    </motion.div>
  );
}

export default Home;
