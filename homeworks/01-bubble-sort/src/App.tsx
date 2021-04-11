import React, { useState } from 'react';
import './App.css';
import { AppName } from './Visuals/AppName';
import { RandomArrayHandler } from './Calculations/RandomArray';
import { Bars } from './Visuals/Bars'
import { BubbleSort } from './Calculations/BubbleSort';

const initialArray:number[] = [];
for (let i = 1; i <= 30; i++) {
  initialArray.push(Math.floor(Math.random() * 100));
}

 
function App() {
  const [array, setArray] = useState<number[]>(initialArray);
  const [sortStep, setSortStep] = useState<number>(0);
  const [sortIndex, setSortIndex] = useState<number>(0);
  const [activeSort, setActiveSort] = useState<boolean>(false);
  return (
    <div>
      <AppName />
      <Bars barInput={array} />
      <div className="Div">
      <RandomArrayHandler setRandomArray={setArray}/>
      <BubbleSort
        arrayToSort={array}
        currentStep={sortStep}
        currentIndex={sortIndex}
        sortIsActive={activeSort}
        setSortedArray={setArray}
        setCurrentStep={setSortStep}
        setCurrentIndex={setSortIndex}
        setSortIsActive={setActiveSort}
      />
      </div>
    </div>
  );
}

export default App;
