import React, { useState } from 'react';
import { Search, Calendar, Menu, X } from 'lucide-react';
import './Navbar.css';
import LazyText from './Lazytext';
import Services from './Services';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
    <header className="navbar-container">
      <nav className="navbar">
        <div className={`nav-left ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/menu" className="nav-link">Menu</Link></li>
          <li><Link to="/about" className="nav-link">Our Lore</Link></li>
          <li><Link to="/services" className="nav-link">Services</Link></li>
          <li><Link to="/moments" className="nav-link">Moments</Link></li>
          <li><Link to="/stay" className="nav-link">Stay</Link></li>
          <li><Link to="/dine" className="nav-link">Dine</Link></li>
          <li><Link to="/events" className="nav-link">Events</Link></li>
          <li><Link to="/inquire" className="nav-link">Inquire</Link></li>
        </div>

        <div className="nav-right">
          <button className="nav-button" aria-label="Search">
            <Search size={18} />
          </button>
          <button className="nav-button" aria-label="Calendar">
            <Calendar size={18} />
          </button>
          <button 
          className="mobile-toggle" 
          onClick={toggleMobileMenu} 
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        </div>
      </nav>
    </header>
    </>
  );
};

export default Navbar;