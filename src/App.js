import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to timr.
        </p>
        <a href="https://github.com/nickywongdong/timr/actions/workflows/timr-ci.yml">
          <img
            src="https://github.com/nickywongdong/timr/actions/workflows/timr-ci.yml/badge.svg"
            alt="timr-ci"
          />
        </a>
      </header>
    </div>
  );
}

export default App;
