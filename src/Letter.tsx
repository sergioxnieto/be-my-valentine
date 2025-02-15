import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './css/Letter.css';
import Button from './Button';
import Image from './Image';
import MilkShyGif from './assets/milk-shy.gif';

type ButtonProps = {
  id: string
  x: number
  y: number
}

function Letter({
  isEnvelopeClicked = false,
  setIsLetterOpened
}: {
  isEnvelopeClicked: boolean
  setIsLetterOpened: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const [shouldRevealLetter, setShouldRevealLetter] = useState(false);
  const [extraButtons, setExtraButtons] = useState<ButtonProps[]>([]);
  const [isMyValentine, setIsMyValentine] = useState(false);

  const spawnButtons = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    buttonCount: number
  ) => {
    const newButtons: ButtonProps[] = [];
    const { clientX, clientY } = e;

    for (let i = 0; i < buttonCount + 1; i++) {
      newButtons.push({
        id: uuidv4(),
        x: clientX + Math.random() * 200 - 100,
        y: clientY + Math.random() * 200 - 100,
      });
    }

    setExtraButtons((prev) => [...prev, ...newButtons]);
  };

  return (
    <div
      className={`letter ${isEnvelopeClicked ? 'opened' : ''} ${shouldRevealLetter ? 'revealed' : ''}`}
      onAnimationEnd={() => {
        setIsLetterOpened(true);
        setShouldRevealLetter(true);
      }}
    >
      {
        isMyValentine ? (
          <div className='valentine-container'>
            <Image />

            <h1 className='message'>YAYY!!<br /> I love you!!</h1>
          </div>
        ) : (
          <>
            <h1 className='prompt'>Will you<br />be my<br />valentine?</h1>

            <div className='buttons'>
              <Button isYes onClick={() => setIsMyValentine(true)} />
              <Button onClick={(e) => spawnButtons(e, extraButtons.length)} />
            </div>

            <div className='image-container'>
              <img
                className='image'
                alt='Milk and Mocha'
                src={MilkShyGif}
              />
            </div>

            {extraButtons.map((props) => (
              <Button
                isYes
                key={props.id}
                onClick={() => setIsMyValentine(true)}
                style={{
                  position: 'absolute',
                  left: `${props.x}px`,
                  top: `${props.y}px`
                }}
              />
            ))}
          </>
        )
      }
    </div>
  );
}

export default Letter;
