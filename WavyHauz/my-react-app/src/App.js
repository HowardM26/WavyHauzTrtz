import React from 'react';
import Navbar from './components/Navbar';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from './components/pages/About';
import Home from './components/pages/Home';
import GourmetCookies from './components/pages/GourmetCookies';
import CustomOrder from './components/pages/CustomOrder';
import withSplashScreen from './components/withSplashScreen'; 

import 'bootstrap/dist/css/bootstrap.min.css';





function App() {
  return (
    <>
    <Router>
        <Navbar />
        <Routes>
        
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
       
          <Route path='/GourmetCookies' element={<GourmetCookies />} />
          <Route path='/CustomOrder' element={<CustomOrder />} />
        </Routes>
      </Router>
      
  </>
);
}
export default withSplashScreen(App);   