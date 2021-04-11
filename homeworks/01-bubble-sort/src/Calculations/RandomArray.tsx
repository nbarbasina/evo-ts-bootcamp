import React from 'react';

type RandomArrayHandlerProps = {
  setRandomArray: (array: number[]) => void,
}

export const RandomArrayHandler: React.FC<RandomArrayHandlerProps> = ({ setRandomArray }) => {
  const buttonHandler = () => {
    const array = [];
    for (let i = 1; i <= 30; i++) {
      array.push(Math.floor(Math.random() * 100));
    }
    setRandomArray(array);
  };
  return (
        
        <button className="Button" onClick={buttonHandler}>New Set</button>
  )
}