import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'
const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-lg-4'>
                        <div className='flex-center'>
                            <img src="https://success-craft.com/_nuxt/img/logo-white.411c88f.svg" alt="" className='img-fluid footer__logo pt-4 pb-4 header__logo__img' />
                        </div>
                    </div>
                    <div className='col-12 col-lg-8 pb-3'>
                        <div className='footer__links'>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/services">Services</Link>
                                </li>
                                <li>
                                    <Link to="/products">Products</Link>
                                </li>
                                <li>
                                    <Link to="/technologies">Technologies</Link>
                                </li>
                                <li>
                                    <Link to="/about-us">About us</Link>
                                </li>
                                <li>
                                    <Link to="/contacts">Contacts</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='text-center col-12 pt-3 border-t'>
                        <span className='p-4'>2015-2023 &copy; <a href="@">Success Craft</a>. All rights reserved.</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
