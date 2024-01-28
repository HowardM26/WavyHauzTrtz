import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/pages/About';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import GourmetCookies from './components/pages/GourmetCookies';
import CustomOrder from './components/pages/CustomOrder';
import withSplashScreen from './components/withSplashScreen'; 
import enterButton from './components/Button';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <>
    <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<enterButton />} />
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Products' element={<Products />} />
          <Route path='/Sign-up' element={<SignUp />} />
          <Route path='/GourmetCookies' element={<GourmetCookies />} />
          <Route path='/CustomOrder' element={<CustomOrder />} />
        </Routes>
      </Router>
      
  </>
);
}
export default withSplashScreen(App);   