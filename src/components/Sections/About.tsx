import React, { useEffect, useRef } from 'react';
import data from '../../data.json';
import { AnimatedName } from '../util/animation';
import { useAnimation, useInView } from 'framer-motion';
import { motion } from 'framer-motion';
import { stackContainer, container, item } from '../util/variants';
import { FaDownload } from 'react-icons/fa';
import Card from '../util/Card';

const About = () => {
  const { displayPicture, description, location, school, degree } =
    data.profile;
  const { general, stack } = data.skills;

  const controls = useAnimation();
  const controlsStack = useAnimation();
  const ref = useRef(null);
  const stackRef = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isInViewStack = useInView(stackRef, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }

    if (isInViewStack) {
      controlsStack.start('visible');
    } else {
      controlsStack.start('hidden');
    }
  }, [controls, isInView, isInViewStack]);

  return (
    <div className='m-auto'>
      <div
        className='flex flex-col items-center justify-center md:px-4 md:flex-row mb-3 md:mb-12'
        ref={ref}
      >
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
          className='border-t-2 pt-2 border-white border-opacity-60 md:pl-4 md:border-l-2 md:border-t-0 md:pt-0'
        >
          <AnimatedName isInView={isInView} />
          {description.map((description, index) => (
            <motion.p
              key={index}
              className='opacity-50 text-lg md:text-base text-comment tracking-normal my-2 md:mb-0'
              variants={item}
            >
              // {description}
            </motion.p>
          ))}
          <a
            className='cursor-pointer flex flex-row gap-2 hover:text-cyan-400 mt-2'
            href={data.cv.file}
            target='_blank'
          >
            <FaDownload className='my-auto' /> Download CV
          </a>
        </motion.div>
      </div>
      <motion.div
        ref={stackRef}
        initial='hidden'
        animate={controls}
        variants={stackContainer}
      >
        <h1 className='mb-3 text-lg'>
          <i className='fas fa-layer-group'></i>&nbsp;Technology stack
        </h1>
        <div className='grid gap-3 grid-cols-2 md:grid-cols-8 md:px-0 text-sm'>
          {stack.map((stack, index) => (
            <motion.div key={index} variants={item}>
              <Card
                className='flex justify-center align-middle flex-col bg-white shadow-inner shadow-[#00000092] rounded-xl p-2'
                img={stack.img}
                title={stack.name}
                size={40}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default About;
