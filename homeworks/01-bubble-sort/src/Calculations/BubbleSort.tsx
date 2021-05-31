import React from 'react';
import { RandomArrayHandler } from './RandomArray';

type BubbleSortProps = {
  arrayToSort: number[],
  currentStep: number,
  currentIndex: number,
  sortIsActive: boolean,
  setSortedArray: (array: number[]) => void, 
  setCurrentStep: (number: number) => void,
  setCurrentIndex: (number: number) => void,
  setSortIsActive: (boolean: boolean) => void,
}

export const BubbleSort: React.FC<BubbleSortProps> = ({
  arrayToSort,
  currentStep,
  currentIndex,
  sortIsActive,
  setSortedArray,
  setCurrentStep,
  setCurrentIndex,
  setSortIsActive,
}) => {
  const sortedArray = [...arrayToSort];
  let buttonName = 'Start';
  if (sortIsActive === true) {
    buttonName = 'Pause';
    if(sortedArray[currentIndex] > sortedArray[currentIndex + 1]) {
      [sortedArray[currentIndex], sortedArray[currentIndex + 1]] = [sortedArray[currentIndex + 1],sortedArray[currentIndex]];
    }
    setTimeout(() => {
      setSortedArray(sortedArray);
      if (currentIndex === sortedArray.length - 1) {
        if (currentStep !== sortedArray.length - 1) {
          setCurrentStep(currentStep + 1);
          setCurrentIndex(0);
        } else {
          setSortIsActive(false)
        }
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 200)
  }

  const sortButtonHandler = () => {
    if (sortIsActive === true) {
      setSortIsActive(false)
    } else {
      setSortIsActive(true)
    }
  }
  
  
  return (
    <button className="Button" onClick={sortButtonHandler}>{buttonName}</button>
  );
}
