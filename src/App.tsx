import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import PageLayout from './components/PageLayout';
import Home from './pages/Home';
import Workouts from './pages/Workouts';

function App() {
  return (
    <Router>
      <PageLayout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Workouts" element={<Workouts />} />
      </Routes>
    </Router>
  );
}

export default App;
