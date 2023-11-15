import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import withSplashScreen from './Components/SplashScreen';
import Stopwatch from './Components/Stopwatch';

function App() {
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {

    const headerElement = document.querySelector('.welcome');
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
    const headerElement = document.querySelector('.welcome');
    if (headerElement) {
      headerElement.style.display = 'none';
    }
  };

  const fadeOutClass = isFading ? 'fade-out' : '';

  return (
    <div className="App">
      <div className="App-container">
        <header className={`welcome ${fadeOutClass}`}>
          <img src={logo} className="App-logo" alt="React Logo" />
          <p>
            Welcome to timr.
          </p>
        </header>
        <Stopwatch />
        <footer>
          <a href="https://github.com/nickywongdong/timr/actions/workflows/timr-ci.yml">
            <img
              src="https://github.com/nickywongdong/timr/actions/workflows/timr-ci.yml/badge.svg"
              alt="Timr Continuous Integration Badge"
            />
          </a>
        </footer>
      </div>
    </div>
  );
}

export default withSplashScreen(App);
