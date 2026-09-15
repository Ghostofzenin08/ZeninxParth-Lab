import React from 'react';
import { motion } from 'framer-motion';

export default function Section({ children, className = '', id = '' }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`py-12 sm:py-16 ${className}`}
    >
      {children}
    </motion.section>
  );
}
