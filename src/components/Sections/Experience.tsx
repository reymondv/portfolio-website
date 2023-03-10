import React, { useState } from 'react';
import data from '../../data.json';
import { BiChevronsRight, BiChevronsLeft } from 'react-icons/bi';

const Experience = () => {
  const experiences = data.experience;
  const [description, setDescription] = useState(false);
  return (
    <div className='flex flex-col relative justify-center'>
      <h1 className='mb-3'>Work experiences</h1>
      {experiences.map((experience, index) => (
        <div
          key={index}
          className='flex justify-between md:odd:flex-row-reverse md:odd:text-right md:flex-row flex-col-reverse group'>
          <div className='p-5 justify-center items-center w-full md:bg-[#1717175f] md:shadow-inner md:shadow-[#0d0d0d] rounded-md'>
            <h1 className='text-3xl font-semibold tracking-wide'>
              {experience.company}
            </h1>
            <h2 className='text-sm italic text-orange-400'>
              {experience.position}
            </h2>
            <button onClick={() => setDescription(true)}>see more</button>
            {description && (
              <p className='text-left text-sm text-comment'>
                {experience.work}
              </p>
            )}
          </div>
          <div className='p-5 flex justify-start items-center overflow-hidden group/div md:group-even:flex-row-reverse relative w-full'>
            {/* <span className='hidden md:block justify-start'>
              {index % 2 === 0 ? (
                <BiChevronsRight
                  size={35}
                  className='cursor-pointer opacity-80'
                />
              ) : (
                <BiChevronsLeft
                  size={35}
                  className='cursor-pointer opacity-80'
                />
              )}
            </span> */}
            <div className='text-2xl font-black tracking-widest md:group-even:text-right md:group-even:translate-x-0 md:group-hover/div:translate-x-[40rem] md:group-even:group-hover/div:-translate-x-[40rem] md:transition-transform md:duration-1000 md:ease-in-out flex-grow text-left'>
              <p className='text-xs h-full text-orange-400 md:text-left md:group-even:text-right'>
                from&nbsp;
              </p>
              <h1>{experience.from}</h1>
            </div>
            <div className='text-2xl font-black tracking-widest md:group-odd:-translate-x-[40rem] md:group-even:translate-x-[40rem] md:group-hover/div:translate-x-0 md:transition-transform md:duration-1000 md:ease-in-out'>
              <p className='text-xs h-full text-orange-400 md:text-left md:group-even:text-right'>
                to&nbsp;
              </p>
              <h1>{experience.to}</h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
