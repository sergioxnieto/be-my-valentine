import React from 'react';
import './css/Image.css';

function Image({
}: {
  }) {

  return (
    <div className='tmp-rule'>
      <div className='polaroid-frame'>
        <img className='picture' src='duos-hug.gif' alt='Milk and Mocha' />
      </div>
    </div>
  );
}

export default Image;
