// Routes.jsx
import React from 'react';
import { Routes as ReactRoutes, Route } from 'react-router-dom';
import Stopwatch from './Components/Stopwatch';
import ConfigurationPage from './Components/ConfigurationPage';

function AppRoutes() {
  return (
    <ReactRoutes>
      <Route path="/configuration" element={<ConfigurationPage />} />
      <Route path="/" element={<Stopwatch />} />
    </ReactRoutes>
  );
}

export default AppRoutes;
