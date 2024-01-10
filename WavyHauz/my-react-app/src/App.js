import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/pages/About';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import GourmetCookies from './components/pages/GourmetCookies';
import withSplashScreen from './components/withSplashScreen'; 

function App() {
  return (
    <>
    <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Products' element={<Products />} />
          <Route path='/Sign-up' element={<SignUp />} />
          <Route path='/GourmetCookies' element={<GourmetCookies />} />
        </Routes>
      </Router>
      <div className='App'>
        Hello, World!
      </div>
  </>
);
}
export default withSplashScreen(App);   