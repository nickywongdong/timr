// index.js

import { initializeMsal, renderApp } from "Services/AuthService/AuthService";
import { darkTheme } from "Styles/Theme";
import reportWebVitals from "./reportWebVitals";

async function startApp() {
  const { msalInstance } = await initializeMsal();
  renderApp({ msalInstance, theme: darkTheme });
}

startApp();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
