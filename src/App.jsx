import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home';
import Services from './pages/Services';
import Products from './pages/Products';
import Technologies from './pages/Technologies';
import AboutUs from './pages/AboutUs';
import Contacts from './pages/Contacts';
import Footer from './components/Footer';
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };


  return (

    <div className="App">

      <header className='header' >
        <div className='container pt-3 pb-3'>
          <div className='row'>
            <div className='col-10 col-lg-4'>
              <Link to="/">
                <img src="https://success-craft.com/_nuxt/img/logo-white.411c88f.svg" alt="" className='header__logo__img img-fluid' />
              </Link>
            </div>
            <div className='col-2 col-lg-8'>
              <div className='header__burger' >
                <HiOutlineMenuAlt3 className='img-fluid' onClick={handleMenuClick} />
              </div>
              <nav className='header__menu'>
                <ul>
                  <li>
                    <Link to="/">Home</Link >
                  </li>
                  <li>
                    <Link to="/services">Services</Link >
                  </li>
                  <li>
                    <Link to="/products">Products</Link >
                  </li>
                  <li>
                    <Link to="/technologies">Technologies</Link >
                  </li>
                  <li>
                    <Link to="/about-us">About us</Link >
                  </li>
                  <li>
                    <Link to="/contacts">Contacts</Link >
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        {menuOpen && (

          <nav className='header__menu active'>
            <ul>
              <li>
                <Link onClick={handleMenuClick} to="/">Home</Link >
              </li>
              <li>
                <Link onClick={handleMenuClick} to="/services">Services</Link >
              </li>
              <li>
                <Link onClick={handleMenuClick} to="/products">Products</Link >
              </li>
              <li>
                <Link onClick={handleMenuClick} to="/technologies">Technologies</Link >
              </li>
              <li>
                <Link onClick={handleMenuClick} to="/about-us">About us</Link >
              </li>
              <li>
                <Link onClick={handleMenuClick} to="/contacts">Contacts</Link >
              </li>
            </ul>
          </nav>

        )}
      </header>






      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' index element={<Services />} />
        <Route path='/products' element={<Products />} />
        <Route path='/technologies' element={<Technologies />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
