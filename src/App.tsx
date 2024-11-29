import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Survey from './pages/Survey';
import Stats from './pages/Stats';
import Workers from './pages/Workers';
import Stations from './pages/Stations';
import Users from './pages/Users';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Survey />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/workers" element={<Workers />} />
        <Route path="/stations" element={<Stations />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </Router>
  );
}

export default App;