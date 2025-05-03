import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg mt-auto">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">HarduLearn</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Your platform for learning hardware and electronics.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/learning" className="text-gray-600 dark:text-gray-300 hover:text-primary hover:dark:text-primary-light transition-colors">
                  Learning Paths
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-600 dark:text-gray-300 hover:text-primary hover:dark:text-primary-light transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/sensors" className="text-gray-600 dark:text-gray-300 hover:text-primary hover:dark:text-primary-light transition-colors">
                  Sensors
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/glossary" className="text-gray-600 dark:text-gray-300 hover:text-primary hover:dark:text-primary-light transition-colors">
                  Glossary
                </Link>
              </li>
              <li>
                <Link to="/submit" className="text-gray-600 dark:text-gray-300 hover:text-primary hover:dark:text-primary-light transition-colors">
                  Submit Project
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-primary hover:dark:text-primary-light transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-primary hover:dark:text-primary-light transition-colors">
                  Discord
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} HarduLearn. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 