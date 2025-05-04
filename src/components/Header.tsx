import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full z-40 fixed top-0 left-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-blue-200/30 dark:border-blue-900/40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={() => setOpen(!open)}
          aria-label="Open navigation menu"
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        {/* Logo/Brand */}
        <Link to="/" className="flex items-center gap-2 font-bold text-lg text-blue-600 dark:text-blue-400 tracking-wide">
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="8" y="8" width="16" height="16" rx="3" fill="#2563EB" stroke="#1e293b" strokeWidth="2"/>
            <rect x="14" y="4" width="4" height="6" fill="#1e293b"/>
            <rect x="14" y="22" width="4" height="6" fill="#1e293b"/>
            <rect x="4" y="14" width="6" height="4" fill="#1e293b"/>
            <rect x="22" y="14" width="6" height="4" fill="#1e293b"/>
          </svg>
          TechEmbers
        </Link>
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center">
          <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Home</Link>
          <Link to="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition">About</Link>
          <Link to="/learning" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Learning Paths</Link>
          <Link to="/projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Projects</Link>
          <Link to="/sensors" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Sensors</Link>
          <Link to="/glossary" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Glossary</Link>
        </nav>
      </div>
      {/* Mobile Nav Drawer */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/40 w-screen h-screen" onClick={() => setOpen(false)}>
          <nav className="fixed left-0 top-0 w-64 h-screen bg-white dark:bg-gray-900 shadow-lg p-6 flex flex-col gap-6 animate-slide-in" onClick={e => e.stopPropagation()}>
            <button className="self-end mb-4" onClick={() => setOpen(false)} aria-label="Close menu">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <Link to="/" className="font-bold text-lg text-blue-600 dark:text-blue-400" onClick={() => setOpen(false)}>Home</Link>
            <Link to="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition" onClick={() => setOpen(false)}>About</Link>
            <Link to="/learning" className="hover:text-blue-600 dark:hover:text-blue-400 transition" onClick={() => setOpen(false)}>Learning Paths</Link>
            <Link to="/projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition" onClick={() => setOpen(false)}>Projects</Link>
            <Link to="/sensors" className="hover:text-blue-600 dark:hover:text-blue-400 transition" onClick={() => setOpen(false)}>Sensors</Link>
            <Link to="/glossary" className="hover:text-blue-600 dark:hover:text-blue-400 transition" onClick={() => setOpen(false)}>Glossary</Link>
            <a href="https://wa.me/919495917116" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition flex items-center gap-2" onClick={() => setOpen(false)}>
              <svg width="24" height="24" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="16" fill="#25D366"/>
                <path d="M23.5 20.5c-.3-.2-1.8-.9-2.1-1-0.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.5-1.6-.9-.8-1.5-1.7-1.7-2-.2-.3 0-.5.1-.7.1-.1.2-.3.3-.5.1-.2.1-.4.2-.6.1-.2 0-.4 0-.6 0-.2-.7-1.7-1-2.3-.2-.5-.5-.4-.7-.4-.2 0-.4 0-.6 0-.2 0-.5.1-.7.3-.2.2-.7.7-.7 1.7 0 1 .7 2 1 2.3.1.2 2 3.1 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.1-1.4z" fill="#fff"/>
              </svg>
              WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header; 