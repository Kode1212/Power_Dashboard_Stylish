
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PowerDashboard from './components/PowerDashboard';
import DetailsPage from './pages/DetailsPage';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<PowerDashboard />} />
      <Route path="/details/:graphId" element={<DetailsPage />} />
    </Routes>
  </Router>
);
