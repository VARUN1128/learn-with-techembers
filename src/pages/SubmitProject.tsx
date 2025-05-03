import React, { useState } from 'react';

const SubmitProject: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-lg mx-auto p-8 rounded-2xl shadow-lg backdrop-blur-md bg-gradient-to-br from-blue-100/80 via-blue-200/70 to-purple-100/80 dark:from-blue-900/80 dark:via-purple-900/70 dark:to-gray-900/80 border border-blue-200/30 dark:border-blue-900/40">
        {submitted ? (
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Thank you for your submission!</h1>
            <p className="text-gray-700 dark:text-gray-300">Your project will be reviewed and added to the library soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h1 className="text-2xl font-bold mb-6 text-center">Submit a Project</h1>
            <div className="mb-4">
              <label className="block mb-2 font-semibold" htmlFor="title">Project Title</label>
              <input type="text" id="title" className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400" required />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-semibold" htmlFor="description">Description</label>
              <textarea id="description" className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400" rows={4} required />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-semibold" htmlFor="components">Components (comma separated)</label>
              <input type="text" id="components" className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400" required />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-semibold" htmlFor="difficulty">Difficulty</label>
              <select id="difficulty" className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400" required>
                <option value="">Select</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>
            <button type="submit" className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">Submit Project</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default SubmitProject; 