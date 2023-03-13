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
      className='flex flex-wrap md:flex-nowrap'
      initial='hidden'
      animate={controls}
      variants={nameContainer}>
      <div className='flex'>
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
      </div>
      <div className='basis-full h-0 md:hidden'></div>
      <motion.div
        variants={item}
        className='text-orange-400 md:ml-3 md:border-l-2 flex md:pl-2 md:border-l-orange-400'>
        <p className='my-auto'>Software Engineer</p>
      </motion.div>
    </motion.div>
  );
};
