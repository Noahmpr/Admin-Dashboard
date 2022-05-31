import React from 'react';

const Button = ({ color, bgcolor, text, borderRadius, size }) => {
  return (
    <button
      type='button'
      style={{ backgroundColor: bgcolor, color: color, borderRadius }}
      className={`text${size} p-3  hover:drop-shadow-xl `}
    >
      {text}
    </button>
  );
};

export default Button;
