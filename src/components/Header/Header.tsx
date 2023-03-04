import React, { useRef, useState } from 'react';
import { HamburgerIcon } from '../ui';

const Header = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const checkboxRef = useRef<HTMLInputElement>(null);
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

  return (
    <header className='bg-black flex justify-between px-4 items-center shadow-sm z-10 sm:px-8 fixed top-0 left-0 w-full sm:static'>
      <div className='text-white'>
        <img
          className='p-1'
          src='/images/icon.png'
          alt='logo'
          height='45'
          width='45'
        />
      </div>
      <div className='text-white'>
        <label htmlFor='hamburger-btn' className='sm:hidden'>
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
        <ul className='sm:flex hidden peer-checked/hamburger:flex flex-col absolute bg-black opacity-95 w-full h-[100svh] left-0 sm:bg-c sm:static sm:flex-row sm:h-[unset] items-center m-0 sm:bg-[unset]'>
          <li className='mx-3 py-1 mt-4 sm:mt-0'>
            <a onClick={toggleHamburgerIcon} href='#about'>
              About
            </a>
          </li>
          <li className='mx-3 py-1'>
            <a onClick={toggleHamburgerIcon} href='#experience'>
              Experience
            </a>
          </li>
          <li className='mx-3 py-1'>
            <a onClick={toggleHamburgerIcon} href='#contact'>
              Contact me
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
