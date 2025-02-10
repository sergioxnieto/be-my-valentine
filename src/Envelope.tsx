import React from 'react';
import './css/Envelope.css';

function Envelope({
  isClicked = false,
  setIsClicked
}: {
  isClicked?: boolean
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>
}) {
  return (
    <div className={`envelope ${isClicked ? 'opened' : ''}`} onClick={() => { setIsClicked(true) }} onAnimationEnd={() => { console.log('hi') }}>
      <img className="postage" src="valentines-postage-stamp.png" alt="Valentines themed postage stamp" />

      <span className="opening">For Sarah</span>
    </div>
  )
}

export default Envelope;
