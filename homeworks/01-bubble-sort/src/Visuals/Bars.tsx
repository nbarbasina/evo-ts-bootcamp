import React, { CSSProperties } from 'react';
import './Bars.css';
import { RandomArrayHandler } from '../Calculations/RandomArray';

type BarInputProps = {
  barInput: number[];
}

export const Bars: React.FC<BarInputProps> = ({barInput}) => {
  const divArray: JSX.Element[] = [];

  barInput.forEach((number, index) => {
    const divStyle = {
      height: `${number}px`
    }
    divArray.push(<div key={index} style={divStyle} className="Bars"/>)
  }); 
  
  return (
    <div className="Bar">
        {divArray}
    </div>
  )
}
