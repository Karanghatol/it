import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Monitor } from 'lucide-react';
import './Header.css'; // Custom styles here

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Faculty', path: '/faculty' },
    { name: 'Programs', path: '/programs' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`navbar navbar-expand-md fixed-top ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        {/* Logo */}
        <Link to="/" className="navbar-brand d-flex align-items-center" aria-label="IT Department Home">
          <div className="logo-icon me-2">
            <Monitor className="text-white" size={32} />
          </div>
          <div className="logo-text">
            <h1 className={`h5 mb-0 ${isScrolled ? 'text-dark' : 'text-white'}`}>PDEA's College of Engineering, Hadapsar</h1>
            <p className={`small mb-0 ${isScrolled ? 'text-muted' : 'text-light'}`}>Information Technology (IT) Department</p>
          </div>
        </Link>

        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Nav Links */}
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto">
            {navItems.map((item) => (
              <li className="nav-item" key={item.name}>
                <Link
                  to={item.path}
                  className={`nav-link position-relative ${location.pathname === item.path ? 'active-link' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                  <span className="hover-underline"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
