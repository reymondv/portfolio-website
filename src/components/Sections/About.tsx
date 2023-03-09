import React, { useEffect, useRef } from 'react';
import data from '../../data.json';
import { AnimatedName } from '../util/animation';
import { useAnimation, useInView } from 'framer-motion';
import { motion } from 'framer-motion';
import { stackContainer, container, item } from '../util/variants';
import Card from '../util/Card';

const About = () => {
  const { displayPicture, description, location, school, degree } =
    data.profile;
  const { general, stack } = data.skills;

  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  console.log(data);
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, isInView]);

  return (
    <div className='m-auto'>
      <div
        className='flex flex-col items-center justify-center md:px-4 md:flex-row mb-3 md:mb-12'
        ref={ref}>
        <div className='mr-0 md:mr-4 md:mb-0 mb-4'>
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
          className='border-t-2 pt-2 border-white border-opacity-60 md:pl-4 md:border-l-2 md:border-t-0 md:pt-0'>
          <AnimatedName isInView={isInView} />
          {description.map((description, index) => (
            <motion.p
              key={index}
              className='opacity-50 text-comment tracking-normal mb-2 md:mb-0'
              variants={item}>
              // {description}
            </motion.p>
          ))}
        </motion.div>
      </div>
      <motion.div initial='hidden' animate={controls} variants={stackContainer}>
        <h3 className='mb-3'>Technology stack:</h3>
        <div className='grid gap-3 grid-cols-2 md:grid-cols-8 md:px-0 text-sm'>
          {stack.map((stack, index) => (
            <motion.div key={index} variants={item}>
              <Card img={stack.img} title={stack.name} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default About;
