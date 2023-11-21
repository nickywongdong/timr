// TimerContext.js
import React, { createContext, useContext, useState } from 'react';

const TimerContext = createContext();

const defaultTimerData = {
    time: null,
    sound: '',
    restTime: null
  };

export const TimerProvider = ({ children }) => {
  const [timerData, setTimerData] = useState(defaultTimerData);

  const setTimerContextData = (data) => {
    setTimerData((prevData) => ({
      ...prevData,
      ...data,
      stopwatchTime: prevData.stopwatchTime != null ? prevData.stopwatchTime : data.stopwatchTime,
      restTime: prevData.restTime != null ? prevData.restTime : data.restTime,
    }));
  };

  return (
    <TimerContext.Provider value={{ timerData, setTimerContextData }}>
      {children}
    </TimerContext.Provider>
  );
};

export const useTimerContext = () => {
  const context = useContext(TimerContext);
  if (!context) {
    throw new Error('useTimerContext must be used within a TimerProvider');
  }
  return context;
};
