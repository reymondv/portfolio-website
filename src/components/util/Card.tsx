import React from 'react';

interface Card {
  img: string;
  title: string;
  size: number;
  className?: string;
  contents?: Stack[];
  link?: string;
  description?: boolean;
}

interface Stack {
  name: string;
  img: string;
}

const Card = ({
  img,
  title,
  size,
  className,
  contents,
  link,
  description = false,
}: Card) => {
  return (
    <div className={`${className}`} title={title}>
      <div className='m-auto'>
        <a href={link} rel='noopener noreferrer' target='_blank'>
          <img
            src={img}
            alt={title}
            title={title}
            height={size}
            width={size}
            className='hover:scale-110 transition-transform ease-in duration-300'
          />
        </a>
      </div>
      {description && contents ? (
        ''
      ) : (
        <span className='md:hidden m-auto text-black'>{title}</span>
      )}
      {description && contents && (
        <div className='flex flex-col'>
          <span className='m-auto text-xl py-2 text-white text-center'>
            {title}
          </span>
          <div className='text-black flex flex-wrap justify-center'>
            {contents.map((content, index) => (
              <div
                key={index}
                className='flex flex-col justify-center items-center m-1 p-2 rounded-md bg-[#ffffff] shadow-inner shadow-[#aaaaaa] max-w-32'>
                <img
                  src={content.img}
                  alt='content-image'
                  height={45}
                  width={45}
                />
                <span className='md:hidden'>{content.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
