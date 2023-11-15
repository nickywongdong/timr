import React, { useState, useEffect } from 'react';

function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        setElapsedTime(prevElapsedTime => prevElapsedTime + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  const startStop = () => {
    setIsRunning(!isRunning);
  };

  const reset = () => {
    setIsRunning(false);
    setElapsedTime(0);
  };

  return (
    <div>
      <div className="stopwatch">
        <span>{String(Math.floor(elapsedTime / 3600)).padStart(2, '0')}:</span>
        <span>{String(Math.floor((elapsedTime % 3600) / 60)).padStart(2, '0')}:</span>
        <span>{String(elapsedTime % 60).padStart(2, '0')}</span>
      </div>
      <button onClick={startStop}>{isRunning ? 'Stop' : 'Start'}</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Stopwatch;
