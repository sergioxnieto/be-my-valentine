import React from 'react';
import './css/Button.css';

function Button({
  isYes = false
}: {
  isYes?: boolean
}) {
  return (
    <div className={`${isYes ? 'yes-button' : 'no-button'}`}>{isYes ? 'YES!' : 'no'}</div>
  );
}

export default Button;
