// Routes.jsx
import React from 'react';
import { Routes as ReactRoutes, Route } from 'react-router-dom';
import Stopwatch from './Components/Stopwatch';
import ConfigurationPanel from './Components/ConfigurationPanel';

function AppRoutes() {
  return (
    <ReactRoutes>
      <Route path="/configuration" element={<ConfigurationPanel />} />
      <Route path="/" element={<Stopwatch />} />
    </ReactRoutes>
  );
}

export default AppRoutes;
