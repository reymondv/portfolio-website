import React from 'react';

export const HamburgerIcon = () => {
  return (
    <>
      <div className='sm:hidden in'>
        <label htmlFor='hamburger-btn'>
          <svg
            width='40'
            height='40'
            viewBox='0 0 50 50'
            strokeWidth='10'
            stroke='black'
            strokeLinecap='round'>
            <line x1='0' y1='10' x2='50' y2='10' id='top-line' />
            <line y1='25' y2='25' x2='50' id='middle-line' />
            <line x1='0' y1='40' x2='50' y2='40' id='bottom-line' />
            {/* <animate
            xlinkHref='#top-line'
            attributeName='y2'
            from='10'
            to='50'
            dur='0.5s'
            begin='click'
            fill='freeze'
          />
          <animate
            xlinkHref='#top-line'
            attributeName='y2'
            from='50'
            to='10'
            dur='0.5s'
            begin='click'
            fill='freeze'
          />
          <animate
            xlinkHref='#middle-line'
            attributeName='visibility'
            from='visible'
            to='hidden'
            dur='0.5s'
            begin='click'
            fill='freeze'
          />
          <animate
            xlinkHref='#top-line'
            attributeName='y1'
            from='10'
            to='0'
            dur='0.5s'
            begin='click'
            fill='freeze'
          />
          <animate
            xlinkHref='#bottom-line'
            attributeName='y2'
            from='40'
            to='10'
            dur='0.5s'
            begin='click'
            fill='freeze'
          />
          <animate
            xlinkHref='#bottom-line'
            attributeName='y1'
            from='40'
            to='50'
            dur='0.5s'
            begin='click'
            fill='freeze'
          />
          <animate
            xlinkHref='#bottom-line'
            attributeName='y2'
            from='40'
            to='0'
            dur='0.5s'
            begin='click'
            fill='freeze'
          /> */}
          </svg>
        </label>
        <input
          className='peer/hamburger'
          type='checkbox'
          // hidden
          name='hamburger-btn'
          id='hamburger-btn'
        />
      </div>
    </>
  );
};
