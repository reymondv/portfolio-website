import React, { useEffect } from 'react';
import data from '../../data.json';
import { motion, useAnimation } from 'framer-motion';
import { nameContainer, item } from './variants';

export const AnimatedName = ({ isInView }: { isInView: boolean }) => {
  const { name } = data.profile;
  const controls = useAnimation();
  const nameArray = name.split('');

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, isInView]);

  return (
    <motion.div
      className='flex'
      initial='hidden'
      animate={controls}
      variants={nameContainer}>
      {nameArray.map((char, idx) => (
        <motion.span
          key={idx}
          className={
            'text-4xl font-bold mb-3 select-none ' + (char == ' ' ? 'w-4' : '')
          }
          variants={item}>
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};
