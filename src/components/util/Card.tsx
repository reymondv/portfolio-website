import React from 'react';

interface Skills {
  img: string;
  title: string;
}

const Card = ({ img, title }: Skills) => {
  return (
    <div
      className='flex justify-center align-middle flex-col bg-white rounded-xl p-2'
      title={title}>
      <div className='m-auto'>
        <img src={img} alt={title} title={title} height={40} width={40} />
      </div>
      <span className='m-auto text-black'>{title}</span>
    </div>
  );
};

export default Card;
