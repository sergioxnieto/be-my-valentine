import React, { useState } from 'react';
import './css/App.css';
import Envelope from './Envelope';
import Button from './Button';
import Letter from './Letter';

function App() {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className='flex-parent'>
      {!!isClicked && <Letter />}
      <Envelope setIsClicked={setIsClicked} isClicked={isClicked} />
    </div>
  );
}

export default App;
