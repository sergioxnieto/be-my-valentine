import React from 'react';
import './css/Letter.css';
import Button from './Button';

function Letter({
  isEnvelopeClicked = false,
  setIsLetterOpened
}: {
  isEnvelopeClicked: boolean
  setIsLetterOpened: React.Dispatch<React.SetStateAction<boolean>>
}) {
  return (
    <div
      className={`letter ${isEnvelopeClicked ? 'opened' : ''}`}
      onAnimationEnd={() => { setIsLetterOpened(true) }}
    >
      <h1 className='prompt'>Will you<br />be my<br />valentine?</h1>

      <div className='buttons'>
        <Button isYes />
        <Button />
      </div>
    </div>
  );
}

export default Letter;
