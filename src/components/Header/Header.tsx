import React, { useEffect, useRef, useState } from 'react';

const Header = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const checkboxRef = useRef<HTMLInputElement>(null);
  const [headerBg, setHeaderBg] = useState<boolean>(false);

  const toggleHamburgerIcon = (e: any) => {
    setToggle(!toggle);

    if (e.target.tagName == 'A') {
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
            <li className='mx-3 py-1 mt-4 md:mt-0'>
              <a onClick={toggleHamburgerIcon} href='#about'>
                about
              </a>
            </li>
            <li className='mx-3 py-1'>
              <a onClick={toggleHamburgerIcon} href='#experience'>
                experience
              </a>
            </li>
            <li className='mx-3 py-1'>
              <a onClick={toggleHamburgerIcon} href='#project'>
                projects
              </a>
            </li>
            <li className='mx-3 py-1'>
              <a onClick={toggleHamburgerIcon} href='#contact'>
                contact.me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
