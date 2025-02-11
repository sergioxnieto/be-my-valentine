import React from 'react';
import './css/Image.css';

function Image() {
  const imageNumber = Math.floor(Math.random() * 4);
  const imgArr = ['duos-hug.gif', 'duos-kiss-1.gif', 'duos-kiss-2.gif', 'duos-kiss-3.gif'];

  return (
    <div className='tmp-rule'>
      <div className='polaroid-frame'>
        <img className='picture' src={imgArr[imageNumber]} alt='Milk and Mocha' />
      </div>
    </div>
  );
}

export default Image;
