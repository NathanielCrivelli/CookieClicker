import './App.css';
import { useState } from 'react';
import React from 'react';
import Upgrade from './Upgrades';

function App() {
  const [score, setScore] = useState(0);
  
  function increment() {
    setScore(score + 1);
  }

  function autoClickBuy() {
    if (score >= 10) {
        setScore(score - 10);
    }
  }

  return (
    <div>
      <button onClick={() => increment()}
        className='cookie-button'>
        </button>
      <h1>Cookies: {score} </h1>
      <Upgrade setScore={setScore}/>
    </div>
  );
}

export default App;
