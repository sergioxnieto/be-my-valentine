import React from 'react';
import './css/Image.css';
import MilkAndMochaHug from './assets/duos-hug.gif';
import MilkAndMochaKiss1 from './assets/duos-kiss-1.gif';
import MilkAndMochaKiss2 from './assets/duos-kiss-2.gif';
import MilkAndMochaKiss3 from './assets/duos-kiss-3.gif';


function Image() {
  const imageNumber = Math.floor(Math.random() * 4);
  const imgArr = [MilkAndMochaHug, MilkAndMochaKiss1, MilkAndMochaKiss2, MilkAndMochaKiss3];

  return (
    <div className='tmp-rule'>
      <div className='polaroid-frame'>
        <img className='picture' src={imgArr[imageNumber]} alt='Milk and Mocha' />
      </div>
    </div>
  );
}

export default Image;
