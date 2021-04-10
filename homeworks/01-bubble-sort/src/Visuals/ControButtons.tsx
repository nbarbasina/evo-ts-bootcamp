import React from 'react';
import './Visuals.css';

export enum ControlButtons {
  NewSet = "New Set",
  Start = "Start",
  Pause = "Pause"
}

export const ControlButton = () => {
  return (
    <div className="ButtonContainer"> 
      <button className="Button"> {ControlButtons.NewSet} </button>
      <button className="Button"> {ControlButtons.Start} </button>
    </div>
  )
}