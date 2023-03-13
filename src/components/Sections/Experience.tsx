import React, { useState } from 'react';
import data from '../../data.json';
import { BiChevronsRight, BiChevronsLeft } from 'react-icons/bi';
import GridTimeline from '../util/GridTimeline';

const Experience = () => {
  const experiences = data.experience;
  const [description, setDescription] = useState(false);
  return (
    <div className='flex flex-col relative justify-center'>
      <h1 className='mb-3 text-2xl'>Work experiences</h1>
      {experiences.map((experience, index) => (
        <GridTimeline key={index} experience={experience} />
      ))}
    </div>
  );
};

export default Experience;
