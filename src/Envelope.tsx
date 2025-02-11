import React from 'react';
import './css/Envelope.css';
import PostageStamp from './assets/valentines-postage-stamp.png';

function Envelope({
  setIsEnvelopeClicked,
  isLetterOpened = false,
}: {
  setIsEnvelopeClicked: React.Dispatch<React.SetStateAction<boolean>>
  isLetterOpened: boolean
}) {
  return (
    <div
      className={`envelope ${isLetterOpened ? 'opened' : ''}`}
      onClick={() => { setIsEnvelopeClicked(true) }}
    >
      <img className="postage" src={PostageStamp} alt="Valentines themed postage stamp" />

      <span className="opening">For Sarah</span>
    </div>
  )
}

export default Envelope;
