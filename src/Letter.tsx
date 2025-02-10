import React, { useState } from 'react';
import './css/Letter.css';
import Button from './Button';

function Letter({
  isEnvelopeClicked = false,
  setIsLetterOpened
}: {
  isEnvelopeClicked: boolean
  setIsLetterOpened: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const [shouldRevealLetter, setShouldRevealLetter] = useState(false);

  return (
    <div
      className={`letter ${isEnvelopeClicked ? 'opened' : ''} ${shouldRevealLetter ? 'revealed' : ''}`}
      onAnimationEnd={() => {
        setIsLetterOpened(true);
        setShouldRevealLetter(true);
      }}
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
