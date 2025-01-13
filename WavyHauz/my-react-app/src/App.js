import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from './components/Navbar';
import About from './components/pages/About';
import Home from './components/pages/Home';
import GourmetCookies from './components/pages/GourmetCookies';
import CustomOrder from './components/pages/CustomOrder';
import withSplashScreen from './components/withSplashScreen';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="gourmetcookies" element={<GourmetCookies />} />
        <Route path="customorder" element={<CustomOrder />} />
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default withSplashScreen(App);
