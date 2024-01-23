import './App.css';
import { useState } from 'react';
import React from 'react';

function App() {
  const [score, setscore] = useState(0);
  
  function increment() {
    setscore(score + 1);
  }

  return (
    <div>
      <button onClick={() => increment()}
        className='cookie-button'>
        </button>
      <h1>Cookies: {score} </h1>

      
    </div>
  );
}

export default App;
