import React, { useState } from 'react';
import { BsFillCaretDownFill, BsFillCaretUpFill } from 'react-icons/bs';
interface ExperienceObject {
  position: string;
  company: string;
  from: string;
  to: string;
  work: string;
  component: string;
  link: string;
}

interface Experience {
  experience: ExperienceObject;
}

const GridTimeline = ({ experience }: Experience) => {
  const [description, setDescription] = useState(false);
  const dropdownButton = () => {
    return description ? (
      <BsFillCaretUpFill
        color='white'
        size={25}
        className='m-auto cursor-pointer'
        onClick={() => setDescription(!description)}
      />
    ) : (
      <BsFillCaretDownFill
        color='white'
        size={25}
        className='m-auto cursor-pointer'
        onClick={() => setDescription(!description)}
      />
    );
  };
  return (
    <div className='flex justify-between md:odd:flex-row-reverse md:odd:text-right md:flex-row flex-col-reverse group bg-[#0f0b0b5f] shadow-md shadow-[#4a4a4a] md:bg-[unset] md:my-0 my-5 rounded-lg md:rounded-none md:shadow-none'>
      <div className='p-5 justify-center items-center w-full md:bg-[#1717175f] md:shadow-inner md:shadow-[#0d0d0d] rounded-xl md:rounded-md transition-all ease-in-out duration-1000'>
        <div className='flex justify-between items-center md:group-odd:flex-row-reverse'>
          <div>
            <h1 className='md:text-4xl font-semibold tracking-wide'>
              {experience.company}
            </h1>
            <h2 className='md:text-md text-base italic text-orange-400'>
              {experience.position}
            </h2>
          </div>
          <div>{dropdownButton()}</div>
        </div>
        <div className='overflow-hidden'>
          <p
            className={
              'text-left md:text-base text-lg  text-comment overflow-hidden transition-all ease-linear duration-700 ' +
              (description ? 'md:max-h-72 max-h-[30rem]' : 'max-h-0')
            }>
            {experience.work}
          </p>
        </div>
      </div>
      <div className='p-5 flex justify-start items-start md:items-center overflow-hidden group/div md:group-even:flex-row-reverse relative w-full'>
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
  );
};

export default GridTimeline;
