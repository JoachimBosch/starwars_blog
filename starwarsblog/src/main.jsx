import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import Profile from './assets/Profile.jsx';
import Navigation from './assets/Navbar.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navigation />
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="profile/:name" element={<Profile />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
