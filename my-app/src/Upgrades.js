import './App.css';
import React from 'react';

function Upgrade(props) {

  return (
    <div className='upgradeList'>
        <h1>Upgrades:</h1>
        <div className='Upgrade-box'>
            <button className='buy-button' onClick={() => props.setScore(10, 1)}>Auto Clicker: 10 Cookies</button>
            <button className='buy-button' onClick={() => props.setScore(50, 5)}>Grandma: 50 Cookies</button>
            <button className='buy-button' onClick={() => props.setScore(100, 10)}>Shipment: 100 Cookies</button>
            <button className='buy-button' onClick={() => props.setScore(1000, 50)}>Truckload: 1000 Cookies</button>
            <button className='buy-button' onClick={() => props.setScore(10000, 100)}>Factory: 10000 Cookies</button>
        </div>
    </div>
  );
}

export default Upgrade;
