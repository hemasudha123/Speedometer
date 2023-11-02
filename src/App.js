import './App.css';
import React, { useState } from 'react';

function App() {
  const [speed, setSpeed] = useState(0);
  let speedcondition = 200;

  const handleAccelerate = () => {
    if (speed < speedcondition) return setSpeed(speed + 10)
  };

  const handleBrack = () => {
    if (speed > 0) return setSpeed(speed - 10)
  }
  return (
    <div className="Speedometer-Container">
      <div className='speedometerParent'>
        <h1 className='title'>SPEEDOMETER</h1>
        <img src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png" alt="speedometer" className='speedometer'/>
        <p className='paragraph'>Speed is {speed} mph</p>
        <h2 className='paragraph'>Min Limit is 0mph,Max Limit is 200mph</h2>
        <div className='bttons-container'>
          <button type="submit" onClick={handleAccelerate} className='accelerate'>Accelerate</button>
          <button type="submit" onClick={handleBrack} className='brack'>Apply Brack</button>
        </div>
      </div>

    </div>
  );
}

export default App;
