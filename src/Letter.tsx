import React from 'react';
import './css/Letter.css';
import Button from './Button';

function Letter() {
  return (
    <div className='letter'>
      <h1 className='prompt'>Will you<br />be my<br />valentine?</h1>

      <div className='buttons'>
        <Button isYes />
        <Button />
      </div>
    </div>
  );
}

export default Letter;
