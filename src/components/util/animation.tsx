import React, { useEffect } from 'react';
import data from '../../data.json';
import { motion, useAnimation } from 'framer-motion';
import { nameContainer, roleContainer, item } from './variants';

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
            'md:text-4xl text-2xl font-bold select-none ' +
            (char == ' ' ? 'w-4' : '')
          }
          variants={item}>
          {char}
        </motion.span>
      ))}
      <motion.span variants={item} className='my-auto text-orange-400'>
        &nbsp;&nbsp;| Software Engineer
      </motion.span>
    </motion.div>
  );
};
