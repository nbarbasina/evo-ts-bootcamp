import React, { useState } from 'react';
import './App.css';
import { ControlButton } from './Visuals/ControButtons';
import { AppName } from './Visuals/AppName';

function App() {

  return (
    <div>
      <AppName />
      <ControlButton />
    </div>
  );
}

export default App;
