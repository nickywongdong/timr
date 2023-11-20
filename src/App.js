import React, { useState, useLayoutEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import NavBar from 'Components/NavBar';
import withSplashScreen from 'Components/SplashScreen';

import { darkTheme } from 'Services/ThemeService/ThemeServices';
import AppRoutes from './AppRoutes';

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
      <ThemeProvider theme={darkTheme}>
      <CssBaseline enableColorScheme />
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
              <a href="https://github.com/nickywongdong/timr/actions/workflows/timr-ci.yml?query=event%3Apull_request">
                <img
                  src="https://github.com/nickywongdong/timr/actions/workflows/timr-ci.yml/badge.svg?event=pull_request"
                  alt="Timr Continuous Integration Badge"
                />
              </a>
              <a href="https://github.com/nickywongdong/timr/actions/workflows/timr-cd.yml">
                <img
                  src="https://github.com/nickywongdong/timr/actions/workflows/timr-cd.yml/badge.svg"
                  alt="Timr Continuous Deployment Badge"
                />
              </a>
            </div>
          </footer>
        </div>
      </ThemeProvider>
    </Router >
  );
}

export default withSplashScreen(App);
