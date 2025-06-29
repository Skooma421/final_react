import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png'

const Header = () => {
  const location = useLocation();

   return (
    <nav className="header">
      <Link to="/" className="logo-link">
        <img src={logo} alt="SweetiePie Logo" className="logo-img" />
      </Link>

      <div className="nav-links">
        <Link className={location.pathname === '/' ? 'active' : ''} to="/">Home</Link>
        <Link className={location.pathname === '/menu' ? 'active' : ''} to="/menu">Menu</Link>
        <Link className={location.pathname === '/contact' ? 'active' : ''} to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Header;
