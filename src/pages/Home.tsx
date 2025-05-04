import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import AnimatedBackground from '../components/AnimatedBackground';

const Footer: React.FC = () => (
  <footer className="w-full mt-16 pt-8 pb-6 text-center text-gray-600 dark:text-gray-400 bg-transparent border-t border-blue-200/30 dark:border-blue-900/40">
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      {/* Logo and Brand */}
      <div className="flex items-center gap-2 justify-center md:justify-start">
        <span className="inline-block">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="8" y="8" width="16" height="16" rx="3" fill="#2563EB" stroke="#1e293b" strokeWidth="2"/>
            <rect x="14" y="4" width="4" height="6" fill="#1e293b"/>
            <rect x="14" y="22" width="4" height="6" fill="#1e293b"/>
            <rect x="4" y="14" width="6" height="4" fill="#1e293b"/>
            <rect x="22" y="14" width="6" height="4" fill="#1e293b"/>
          </svg>
        </span>
        <span className="font-bold text-lg text-blue-600 dark:text-blue-400 tracking-wide">TechEmbers</span>
      </div>
      {/* Footer Links and Socials */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
        <Link to="/about" className="hover:text-blue-600 dark:hover:text-blue-400 font-medium transition">About</Link>
        <a href="https://wa.me/919495917116" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition" title="Contact on WhatsApp">
          <svg width="28" height="28" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="16" fill="#25D366"/>
            <path d="M23.5 20.5c-.3-.2-1.8-.9-2.1-1-0.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.5-1.6-.9-.8-1.5-1.7-1.7-2-.2-.3 0-.5.1-.7.1-.1.2-.3.3-.5.1-.2.1-.4.2-.6.1-.2 0-.4 0-.6 0-.2-.7-1.7-1-2.3-.2-.5-.5-.4-.7-.4-.2 0-.4 0-.6 0-.2 0-.5.1-.7.3-.2.2-.7.7-.7 1.7 0 1 .7 2 1 2.3.1.2 2 3.1 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.1-1.4z" fill="#fff"/>
          </svg>
        </a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"/></svg>
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.59-2.47.7a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99C7.69 9.13 4.07 7.38 1.64 4.7c-.37.64-.58 1.39-.58 2.19 0 1.51.77 2.84 1.95 3.62-.72-.02-1.4-.22-1.99-.55v.06c0 2.11 1.5 3.87 3.5 4.27-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.7 2.12 2.94 3.99 2.97A8.6 8.6 0 0 1 2 19.54c-.65 0-1.29-.04-1.92-.11A12.13 12.13 0 0 0 8.29 21.5c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0 0 24 4.59a8.36 8.36 0 0 1-2.54.7z"/></svg>
        </a>
        <a href="mailto:contact@techember.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 20v-9.99l7.99 7.99c.39.39 1.02.39 1.41 0L20 10.01V20H4z"/></svg>
        </a>
      </div>
      {/* Copyright */}
      <div className="text-xs mt-4 md:mt-0 text-gray-400 w-full text-center md:text-right">
        &copy; {new Date().getFullYear()} TechEmbers &mdash; Empowering Hardware Learners
      </div>
    </div>
  </footer>
);

const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      <AnimatedBackground />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Learn with <span className="text-blue-600 dark:text-blue-400">TechEmbers</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Your gateway to mastering hardware and electronics. Learn, build, and innovate with our comprehensive learning paths and project library.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/learning"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Start Learning
              </Link>
              <Link
                to="/projects"
                className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Browse Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-gradient-to-br from-blue-100/80 via-blue-200/70 to-purple-100/80 dark:from-blue-900/80 dark:via-purple-900/70 dark:to-gray-900/80">
            <h2 className="text-xl font-bold mb-2 text-blue-700 dark:text-blue-400">Our Vision</h2>
            <p className="text-gray-700 dark:text-gray-300">
              To ignite curiosity and empower every learner to become a confident creator in the world of hardware and electronics.
            </p>
          </Card>
          <Card className="bg-gradient-to-br from-blue-100/80 via-blue-200/70 to-purple-100/80 dark:from-blue-900/80 dark:via-purple-900/70 dark:to-gray-900/80">
            <h2 className="text-xl font-bold mb-2 text-blue-700 dark:text-blue-400">Our Mission</h2>
            <p className="text-gray-700 dark:text-gray-300">
              To provide accessible, hands-on learning paths, real-world projects, and a supportive community for hardware enthusiasts of all levels.
            </p>
          </Card>
        </div>
      </section>

      {/* Learn Computer Hardware Section */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <Card className="bg-gradient-to-br from-blue-50/90 via-blue-100/80 to-purple-50/80 dark:from-blue-900/80 dark:via-purple-900/70 dark:to-gray-900/80">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-2 text-blue-700 dark:text-blue-400">Learn Computer Hardware</h2>
                <p className="mb-3 text-gray-700 dark:text-gray-300">
                  Are you interested in pursuing a career as a computer hardware engineer? Learn about the physical components of a computer system, from CPUs and RAM to motherboards and storage devices. Explore how hardware and software work together to power modern technology.
                </p>
                <ul className="mb-3 list-disc list-inside text-gray-700 dark:text-gray-300">
                  <li><b>What is computer hardware?</b> Hardware consists of the physical components that make up a computer system, including input, output, processing, and storage devices.</li>
                  <li><b>Key components:</b> Motherboard, CPU, RAM, GPU, HDD/SSD, monitor, keyboard, mouse, and more.</li>
                  <li><b>Why learn hardware?</b> Build, upgrade, and troubleshoot computers; prepare for careers in IT, engineering, and tech support.</li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  <button className="px-5 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">Browse Hardware Courses</button>
                  <button className="px-5 py-2 bg-gray-200 text-gray-800 rounded-lg font-semibold hover:bg-gray-300 transition-colors">Explore Hardware Jobs</button>
                  <button className="px-5 py-2 bg-purple-100 text-purple-800 rounded-lg font-semibold hover:bg-purple-200 transition-colors">Hardware FAQ</button>
                </div>
              </div>
              <div className="flex-1 flex justify-center md:justify-end">
                {/* Placeholder for the image */}
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-white/90 via-white/80 to-blue-50/70 dark:from-gray-100/90 dark:via-gray-200/80 dark:to-blue-100/70">
              <h2 className="text-2xl font-bold mb-4">Learning Paths</h2>
              <p className="text-gray-600 dark:text-gray-700">
                Follow structured learning paths from basics to advanced topics in hardware and electronics.
              </p>
            </Card>
            <Card className="bg-gradient-to-br from-white/90 via-white/80 to-blue-50/70 dark:from-gray-100/90 dark:via-gray-200/80 dark:to-blue-100/70">
              <h2 className="text-2xl font-bold mb-4">Project Library</h2>
              <p className="text-gray-600 dark:text-gray-700">
                Explore and build real-world projects with step-by-step guides and resources.
              </p>
            </Card>
            <Card className="bg-gradient-to-br from-white/90 via-white/80 to-blue-50/70 dark:from-gray-100/90 dark:via-gray-200/80 dark:to-blue-100/70">
              <h2 className="text-2xl font-bold mb-4">Sensor Explorer</h2>
              <p className="text-gray-600 dark:text-gray-700">
                Learn about different sensors and how to integrate them into your projects.
              </p>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home; 