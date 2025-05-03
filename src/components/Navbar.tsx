import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <span className="text-2xl font-bold text-primary">HarduLearn</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/learning" className="text-gray-700 dark:text-gray-300 hover:text-primary hover:dark:text-primary-light px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Learning Paths
              </Link>
              <Link to="/projects" className="text-gray-700 dark:text-gray-300 hover:text-primary hover:dark:text-primary-light px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Projects
              </Link>
              <Link to="/sensors" className="text-gray-700 dark:text-gray-300 hover:text-primary hover:dark:text-primary-light px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Sensors
              </Link>
              <Link to="/glossary" className="text-gray-700 dark:text-gray-300 hover:text-primary hover:dark:text-primary-light px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Glossary
              </Link>
              <Link to="/submit" className="btn btn-primary">
                Submit Project
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-primary hover:dark:text-primary-light focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/learning" className="text-gray-700 dark:text-gray-300 hover:text-primary hover:dark:text-primary-light block px-3 py-2 rounded-md text-base font-medium transition-colors">
              Learning Paths
            </Link>
            <Link to="/projects" className="text-gray-700 dark:text-gray-300 hover:text-primary hover:dark:text-primary-light block px-3 py-2 rounded-md text-base font-medium transition-colors">
              Projects
            </Link>
            <Link to="/sensors" className="text-gray-700 dark:text-gray-300 hover:text-primary hover:dark:text-primary-light block px-3 py-2 rounded-md text-base font-medium transition-colors">
              Sensors
            </Link>
            <Link to="/glossary" className="text-gray-700 dark:text-gray-300 hover:text-primary hover:dark:text-primary-light block px-3 py-2 rounded-md text-base font-medium transition-colors">
              Glossary
            </Link>
            <Link to="/submit" className="btn btn-primary block w-full text-center">
              Submit Project
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 