'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function ScrollAnimation({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }} // ১০% স্ক্রিনে আসলেই অ্যানিমেশন স্টার্ট হবে
      transition={{
        duration: 0.6,
        delay: delay,
        ease: [0.16, 1, 0.3, 1], // আরও স্মুথ স্প্রিং/ইজিং এফেক্ট
      }}
    >
      {children}
    </motion.div>
  );
}