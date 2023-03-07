import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='flex justify-center text-sm my-3 opacity-60 font-300 font-mono px-5 text-center md:px-0'>
      &copy; {year} Reymond Villanueva. All Rights Reserved.
    </footer>
  );
};

export default Footer;
