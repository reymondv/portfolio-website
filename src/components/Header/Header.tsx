import React, { useEffect, useRef, useState } from 'react';
import { BsGithub, BsLinkedin, BsMailbox } from 'react-icons/bs';
import { AiFillMail } from 'react-icons/ai';
import { MdMail } from 'react-icons/md';
const Header = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const checkboxRef = useRef<HTMLInputElement>(null);
  const [headerBg, setHeaderBg] = useState<boolean>(false);

  const toggleHamburgerIcon = (e: any) => {
    if (window.innerWidth < 768) setToggle(!toggle);

    if (e.target.tagName == 'A' && window.innerWidth < 768) {
      setTimeout(() => {
        if (checkboxRef?.current != null) {
          checkboxRef.current.checked = false;
        }
      }, 150);
    }
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.pageYOffset >= 80 && window.innerWidth < 768) {
        setHeaderBg(true);
      }

      if (window.pageYOffset <= 60 && window.innerWidth < 768) {
        setHeaderBg(false);
      }

      if (window.pageYOffset >= 250 && window.innerWidth >= 768) {
        setHeaderBg(true);
      }

      if (window.pageYOffset <= 180 && window.innerWidth >= 768) {
        setHeaderBg(false);
      }
    };
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [window.pageYOffset]);

  return (
    <header
      className={
        'px-4 shadow-sm z-10 md:px-8 sticky top-0 left-0 w-full md:sticky transition-all ease-in-out duration-200 ' +
        (headerBg ? 'bg-black bg-opacity-90' : 'bg-opacity-0 bg-transparent')
      }>
      <div className='max-w-6xl flex justify-between items-center px-4 m-auto'>
        <div className='text-white font-mono font-thin flex items-center md:font-normal md:text-xl'>
          <a href='#'>
            <img
              className='p-1'
              src='/images/icon.png'
              alt='logo'
              height='45'
              width='45'
            />
          </a>
          <h1 className='text-orange-400 cursor-default select-none'>
            <span className='text-cyan-400'>&#123; </span>reymond
            <span className='text-cyan-400'> &#125;</span>
          </h1>
        </div>
        <div className='text-white'>
          <label htmlFor='hamburger-btn' className='md:hidden'>
            <div
              onClick={toggleHamburgerIcon}
              className={'hamburger ' + (toggle ? 'is-active' : '')}
              id='hamburger'>
              <span className='line'></span>
              <span className='line'></span>
              <span className='line'></span>
            </div>
          </label>
          <input
            ref={checkboxRef}
            className='peer/hamburger'
            type='checkbox'
            hidden
            name='hamburger-btn'
            id='hamburger-btn'
          />
          <ul className='md:flex hidden peer-checked/hamburger:flex flex-col absolute bg-black opacity-95 w-full h-[100svh] left-0 md:bg-c md:static md:flex-row md:h-[unset] items-center m-0 md:bg-[unset] text-4xl md:text-base'>
            <li className='mx-3 py-1 mt-4 md:mt-0 hover:text-cyan-300 transition-all ease-in-out duration-200'>
              <a onClick={toggleHamburgerIcon} href='#about'>
                about
              </a>
            </li>
            <li className='mx-3 py-1 hover:text-cyan-300 transition-all ease-in-out duration-200'>
              <a onClick={toggleHamburgerIcon} href='#experience'>
                experience
              </a>
            </li>
            <li className='mx-3 py-1 hover:text-cyan-300 transition-all ease-in-out duration-200'>
              <a onClick={toggleHamburgerIcon} href='#project'>
                projects
              </a>
            </li>
            <div className='flex flex-row'>
              <li className='mx-3 py-1 hover:text-cyan-300 transition-all ease-in-out duration-200'>
                <a
                  href='mailto:reymondyv@gmail.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  title='Email'>
                  <MdMail className='text-orange-500 hover:text-cyan-400 transition-all ease-in-out duration-200 h-12 md:h-7 w-auto' />
                </a>
              </li>
              <li className='mx-3 py-1 hover:text-cyan-300 transition-all ease-in-out duration-200'>
                <a
                  target='_blank'
                  href='https://github.com/reymondv'
                  rel='noopener noreferrer'
                  title='Github'>
                  <BsGithub className='text-orange-500 hover:text-cyan-400 transition-all ease-in-out duration-200 h-12 md:h-7 w-auto' />
                </a>
              </li>
              <li className='mx-3 py-1 hover:text-cyan-300 transition-all ease-in-out duration-200'>
                <a
                  href='https://www.linkedin.com/in/reymondyv/'
                  target='_blank'
                  rel='noopener noreferrer'
                  title='Linkedin'>
                  <BsLinkedin className='text-orange-500 hover:text-cyan-400 transition-all ease-in-out duration-200 h-12 md:h-7 w-auto' />
                </a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
