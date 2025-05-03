import React from 'react';

const About: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center px-4 py-12">
    <div className="max-w-2xl w-full bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-lg p-8 backdrop-blur-md border border-blue-200/30 dark:border-blue-900/40">
      <h1 className="text-3xl font-bold mb-4 text-blue-700 dark:text-blue-400">About TechEmbers</h1>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        <b>TechEmbers</b> is your gateway to mastering hardware and electronics. Our mission is to empower learners of all levels with hands-on projects, structured learning paths, and a vibrant community. Whether you're a beginner or an advanced maker, you'll find resources, guides, and inspiration to ignite your passion for technology.
      </p>
      <p className="text-gray-700 dark:text-gray-300">
        Explore our learning paths, dive into real-world projects, and connect with fellow enthusiasts. Let's build, learn, and innovate together!
      </p>
    </div>
  </div>
);

export default About; 