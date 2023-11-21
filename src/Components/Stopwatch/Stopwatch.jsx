import React, { useState, useEffect } from 'react';
import Divider from '@mui/material/Divider';
import dayjs from 'dayjs';
import { enqueueSnackbar } from 'notistack'

import { useTimerContext } from 'Contexts/TimerContext';

function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);


  const { timerData } = useTimerContext();
  const formatTime = (time) => time?.format('HH:mm:ss');

  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        const startOfDay = dayjs().startOf('day');

        setElapsedTime(prevElapsedTime => {

          const durationInSeconds = timerData?.stopwatchTime.diff(startOfDay, 'second');
          console.log("Checking " + prevElapsedTime + " against " + durationInSeconds);
          if (prevElapsedTime < durationInSeconds) {
            return prevElapsedTime + 1;
          } else {

            setIsRunning(false);
            console.log('Stopwatch time has elapsed!');
            return prevElapsedTime;
          }
        });

        // Check if the elapsed time matches restTime
        if (elapsedTime === timerData?.restTime.diff(startOfDay, 'seconds')) {
          enqueueSnackbar(timerData?.sound + ": Rest time!", { autoHideDuration: 1000 });
          console.log('Rest time has elapsed:', timerData?.sound);
        }
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [isRunning, elapsedTime, timerData]);

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
        <div>
          <span>Timer: {formatTime(timerData?.stopwatchTime)}</span>
          <Divider />
          <span>Rest Timer: {formatTime(timerData?.restTime)}</span>
          <Divider />
          <span>Sound: {timerData?.sound}</span>
          <Divider />
        </div>
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
