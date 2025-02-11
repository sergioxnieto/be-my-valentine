import React from 'react';
import './css/Button.css';

function Button({
  isYes = false,
  ...rest
}: React.HTMLProps<HTMLDivElement> & {
  isYes?: boolean
}) {
  return (
    <div
      {...rest}
      className={`${isYes ? 'yes-button' : 'no-button'}`}
    >
      {isYes ? 'YES!' : 'no'}
    </div>
  );
}

export default Button;
