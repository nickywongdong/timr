import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import withSplashScreen from './Components/SplashScreen/withSplashScreen';
import Stopwatch from './Components/Stopwatch/Stopwatch';

import ConfigurationPanel from './Components/ConfigurationPanel'; 

function App() {
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {

    const headerElement = document.querySelector('.welcome'); // Change '.header' to your actual class name
    headerElement.addEventListener('transitionend', handleTransitionEnd);

    // Set a timeout to trigger the fade-out effect after 1 seconds
    const fadeTimeout = setTimeout(() => {
      setIsFading(true);
    }, 1000); // 1 seconds

    return () => {
      clearTimeout(fadeTimeout);
      headerElement.removeEventListener('transitionend', handleTransitionEnd);
    }
  }, []); // Empty dependency array ensures this runs only once on component mount


  const handleTransitionEnd = () => {
    const headerElement = document.querySelector('.welcome'); // Change '.header' to your actual class name
    headerElement.style.display = 'none';
  };

  return (
    <div className="App">
      <div className="App-container">
        <header className={`welcome ${isFading ? 'fade-out hidden' : ''}`}>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to timr.
          </p>
        </header>
        <ConfigurationPanel />
        <Stopwatch />
        <footer>
          <a href="https://github.com/nickywongdong/timr/actions/workflows/timr-ci.yml">
            <img
              src="https://github.com/nickywongdong/timr/actions/workflows/timr-ci.yml/badge.svg"
              alt="timr-ci"
            />
          </a>
        </footer>
      </div>
    </div>
  );
}

export default withSplashScreen(App);
