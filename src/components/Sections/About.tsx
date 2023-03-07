import React, { useEffect, useRef } from 'react';
import data from '../../data.json';
import { AnimatedName } from '../util/animation';
import { useAnimation, useInView } from 'framer-motion';
import { motion } from 'framer-motion';
import { container, item } from '../util/variants';

const About = () => {
  const { displayPicture, description, location, school, degree } =
    data.profile;

  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, isInView]);

  return (
    <div
      className='h-screen flex items-center justify-center max-w-6xl m-auto px-4'
      ref={ref}>
      <div className='mr-4'>
        <img
          className='m-auto rounded-full aspect-square'
          src={displayPicture}
          alt='display-picture'
          height={350}
          width={350}
        />
      </div>
      <motion.div
        initial='hidden'
        animate={controls}
        variants={container}
        className='border-l-2 border-white pl-4 border-opacity-60'>
        <AnimatedName isInView={isInView} />
        {description.map((description, index) => (
          <motion.p
            key={index}
            className='opacity-50 text-comment'
            variants={item}>
            // {description}
          </motion.p>
        ))}
      </motion.div>
    </div>
  );
};

export default About;
