import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='flex flex-col justify-center text-sm my-3 opacity-80 font-300 font-mono px-5 text-center md:px-0'>
      <div>
        Built with{' '}
        <span className='hover:text-cyan-400 text-orange-400'>
          ReactJS TypeScript
        </span>
        ,{' '}
        <span className='hover:text-cyan-400 text-orange-400'>TailwindCSS</span>
        , and{' '}
        <span className='hover:text-cyan-400 text-orange-400'>
          Framer Motion
        </span>
        . Deployed throgh{' '}
        <span className='hover:text-cyan-400 text-orange-400'>Vercel</span>
      </div>
      <div>&copy; {year} Reymond Villanueva. All Rights Reserved.</div>
    </footer>
  );
};

export default Footer;
