import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function NavLink({ to, label }: { to: string; label: string }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`nav-link ${isActive ? 'text-[#ffd700]' : 'text-white'}`}
    >
      {label}
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    // Prevent scrolling when menu is open
    document.body.style.overflow = !mobileMenuOpen ? 'hidden' : 'unset';
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
        <div className="mx-4 md:mx-8">
          <div className={`mx-auto bg-black/30 backdrop-blur-md rounded-full border border-white/10 transition-all duration-300 ${scrolled ? 'py-2' : 'py-3'}`}>
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
              <Link to="/" className="flex items-center space-x-3 text-white hover:text-[#ffd700] transition-colors">
                <img src="https://giocoliere.dev/assets/creepercraft/logo.png" alt="Logo" className="w-8 h-8" />
                <span className="text-xl font-bold">Creepercraft</span>
              </Link>

              <div className="hidden md:flex items-center space-x-8">
                <NavLink to="/" label="Home" />
                <NavLink to="/status" label="Status" />
                <NavLink to="/discord" label="Discord" />
                <a 
                  href="https://creeperhub.net" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="nav-link"
                >
                  CreeperHUB
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-white p-2 focus:outline-none"
                onClick={toggleMobileMenu}
              >
                <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} className="text-2xl" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMobileMenu}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 bottom-0 right-0 w-64 bg-black/80 backdrop-blur-md z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col p-6 space-y-6 mt-16">
          <Link to="/" className="nav-link" onClick={toggleMobileMenu}>Home</Link>
          <Link to="/status" className="nav-link" onClick={toggleMobileMenu}>Status</Link>
          <Link to="/discord" className="nav-link" onClick={toggleMobileMenu}>Discord</Link>
          <a 
            href="https://creeperhub.net" 
            target="_blank" 
            rel="noopener noreferrer"
            className="nav-link"
            onClick={toggleMobileMenu}
          >
            CreeperHUB
          </a>
        </div>
      </div>
    </>
  );
}
