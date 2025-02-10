import React, { useState } from 'react';
import './css/App.css';
import Envelope from './Envelope';
import Letter from './Letter';

function App() {
  const [isEnvelopeClicked, setIsEnvelopeClicked] = useState(false);
  const [isLetterOpened, setIsLetterOpened] = useState(false);

  return (
    <div className='flex-parent'>
      {!!isEnvelopeClicked &&
        <Letter
          setIsLetterOpened={setIsLetterOpened}
          isEnvelopeClicked={isEnvelopeClicked}
        />
      }
      <Envelope
        setIsEnvelopeClicked={setIsEnvelopeClicked}
        isLetterOpened={isLetterOpened}
      />
    </div>
  );
}

export default App;
