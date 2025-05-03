import React, { useState } from 'react';
import projectsData from '../data/projects.json';
import { Link } from 'react-router-dom';
import Card from '../components/Card';

const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];
const platforms = ['All', 'Arduino', 'Raspberry Pi', 'ESP32'];

const ProjectsLibrary: React.FC = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [selectedPlatform, setSelectedPlatform] = useState('All');

  const filteredProjects = (projectsData as any[]).filter(project => {
    const difficultyMatch = selectedDifficulty === 'All' || project.difficulty === selectedDifficulty;
    const platformMatch = selectedPlatform === 'All' || project.platform === selectedPlatform;
    return difficultyMatch && platformMatch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-purple-900 dark:to-pink-900">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Projects Library</h1>
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <select
            className="px-4 py-2 rounded border border-gray-300 focus:outline-none"
            value={selectedDifficulty}
            onChange={e => setSelectedDifficulty(e.target.value)}
          >
            {difficulties.map(diff => (
              <option key={diff} value={diff}>{diff}</option>
            ))}
          </select>
          <select
            className="px-4 py-2 rounded border border-gray-300 focus:outline-none"
            value={selectedPlatform}
            onChange={e => setSelectedPlatform(e.target.value)}
          >
            {platforms.map(plat => (
              <option key={plat} value={plat}>{plat}</option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <Card key={project.id}>
              <div>
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="mb-3 text-gray-700 dark:text-gray-300">{project.description}</p>
                <div className="mb-2">
                  <span className="font-semibold">Difficulty:</span> {project.difficulty}
                </div>
                <div className="mb-2">
                  <span className="font-semibold">Platform:</span> {project.platform}
                </div>
                <div className="mb-2">
                  <span className="font-semibold">Components:</span>
                  <ul className="list-disc list-inside ml-4">
                    {project.components.map((comp: string, idx: number) => (
                      <li key={idx}>{comp}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-4 flex justify-end">
                <Link to={`/projects/${project.id}`} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">View Details</Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsLibrary; 