import React, { useState, useLayoutEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import withSplashScreen from './Components/SplashScreen';
import NavBar from './Components/NavBar';
import logo from './logo.svg';
import './App.css';

function App() {
  const [isFading, setIsFading] = useState(false);

  useLayoutEffect(() => {
    const headerElement = document.querySelector('.welcome');
    headerElement.addEventListener('transitionend', handleTransitionEnd);

    const fadeTimeout = setTimeout(() => {
      setIsFading(true);
    }, 1000);

    return () => {
      clearTimeout(fadeTimeout);
      headerElement.removeEventListener('transitionend', handleTransitionEnd);
    };
  }, []); // Empty dependency array ensures this runs only once on component mount

  const handleTransitionEnd = () => {
    const headerElement = document.querySelector('.welcome');
    if (headerElement) {
      headerElement.style.display = 'none';
    }
  };

  const fadeOutClass = isFading ? 'fade-out' : '';

  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="AppContainer">
          <header className={`welcome ${fadeOutClass}`}>
            <img src={logo} className="AppLogo" alt="Timr Logo" />
            <p>Welcome to timr.</p>
          </header>
          <div className="stopwatchContainer"><AppRoutes /></div>
        </div>
        <footer>
            <div>
              <a href="https://github.com/nickywongdong/timr/actions/workflows/timr-ci.yml">
                <img
                  src="https://github.com/nickywongdong/timr/actions/workflows/timr-ci.yml/badge.svg"
                  alt="Timr Continuous Integration Badge"
                />
              </a>
            </div>
          </footer>
      </div>
    </Router>
  );
}

export default withSplashScreen(App);
