import './App.css';
import { useState } from 'react';
import React from 'react';
import Upgrade from './Upgrades';

function App() {
  const [score, setScore] = useState(0);
  const [CPS, setCPS] = useState(0);
  
  function increment() {
    setScore(score + 1);
  }

  function buyUpgrade(num, cpsnum) {
    if (score - num >= 0) {
      setScore(score - num);
      setCPS(CPS + cpsnum)
    }
  }

  return (
    <div>
      <button onClick={() => increment()}
        className='cookie-button'>
        </button>
      <h1 className='CPS-display'>CPS: {CPS} </h1>
      <h1>Cookies: {score} </h1>
      <Upgrade setScore={(num, cpsnum) => buyUpgrade(num, cpsnum)}/>
    </div>
  );
}

export default App;
