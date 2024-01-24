import './App.css';
import React from 'react';
import { useState } from 'react';

function Upgrade(props) {

  return (
    <div className='upgradeList'>
        <h1>Upgrades:</h1>
        <div>
            <button onClick={props.setScore}>Auto Clicker: 10 Cookies</button>
            <button onClick={props.setScore}>Grandma: 50 Cookies</button>
            <button onClick={props.setScore}>Shipment: 100 Cookies</button>
        </div>
    </div>
  );
}

export default Upgrade;
