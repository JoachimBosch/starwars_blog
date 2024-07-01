import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from './assets/Profile.jsx';
import Navigation from './assets/Navbar.jsx';
import { MyProvider } from './Context/Context.jsx';
import VehicleProfile from './assets/VehicleProfile.jsx';
import PlanetProfile from './assets/PlanetProfile.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyProvider>
    <Router>
      <Navigation />
      
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="profile/:name" element={<Profile />} />
          <Route path="profile/vehicle/:name" element={<VehicleProfile />} />
          <Route path="profile/planet/:name" element={<PlanetProfile />} />
        </Routes>
      </Router>
    </MyProvider>
  </React.StrictMode>,
);