import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import HowItWorks from './HowItWorks';
import './index.css';

function App() {
  return (
    <Router>
      <div className="container">
        {/* NAVBAR */}
        <nav className="navbar">
          <Link to="/" className="nav-brand">
            <img src="https://raw.githubusercontent.com/Eng-ahmed-dev1/Archneter-Library/main/Archneter.Cli/icon.png" alt="Archneter Logo" />
            Archneter
          </Link>
          
          <div className="nav-links">
            <Link to="/how-it-works" className="nav-link">How it works</Link>
            <a href="https://github.com/Eng-ahmed-dev1/Archneter-Library" target="_blank" rel="noreferrer" className="nav-link">GitHub</a>
            
            <a href="https://www.nuget.org/packages/Archneter" target="_blank" rel="noreferrer" className="btn btn-primary">
              Get started 
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: '8px'}}><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
