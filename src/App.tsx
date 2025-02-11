import React, { useEffect, useRef, useState } from 'react';
import './css/App.css';
import Envelope from './Envelope';
import Letter from './Letter';

function App() {
  const [isEnvelopeClicked, setIsEnvelopeClicked] = useState(false);
  const [isLetterOpened, setIsLetterOpened] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const handleUserGesture = () => {
      // Unlock audio playback after a user gesture
      if (audioRef.current) {
        audioRef.current.play().catch((error) => {
          console.error("Error playing audio:", error);
        });
      }
      // Remove the event listener once audio is unlocked
      window.removeEventListener("click", handleUserGesture);
      window.removeEventListener("touchstart", handleUserGesture);
    };

    // Attach user gesture handlers to unlock audio
    window.addEventListener("click", handleUserGesture);
    window.addEventListener("touchstart", handleUserGesture);

    return () => {
      window.removeEventListener("click", handleUserGesture);
      window.removeEventListener("touchstart", handleUserGesture);
    };
  }, []);


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

      <audio ref={audioRef} src={process.env.PUBLIC_URL + '/Candy-Seventeen.mp3'} preload="auto" />
    </div>
  );
}

export default App;
