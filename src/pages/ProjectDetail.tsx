import React from 'react';
import { useParams, Link } from 'react-router-dom';
import projectsData from '../data/projects.json';
import Card from '../components/Card';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = (projectsData as any[]).find(p => p.id === id);

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-8 text-center min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
        <Link to="/projects" className="text-blue-500 underline">Back to Projects</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <Card>
          <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
          <p className="mb-4 text-gray-700 dark:text-gray-300">{project.description}</p>
          <div className="mb-4">
            <span className="font-semibold">Difficulty:</span> {project.difficulty}
          </div>
          <div className="mb-4">
            <span className="font-semibold">Platform:</span> {project.platform}
          </div>
          <div className="mb-4">
            <span className="font-semibold">Components:</span>
            <ul className="list-disc list-inside ml-4">
              {project.components.map((comp: string, idx: number) => (
                <li key={idx}>{comp}</li>
              ))}
            </ul>
          </div>
          <div className="mb-4">
            <span className="font-semibold">Steps:</span>
            <ol className="list-decimal list-inside ml-4">
              {project.steps.map((step: string, idx: number) => (
                <li key={idx}>{step}</li>
              ))}
            </ol>
          </div>
          {project.videoLinks && project.videoLinks.length > 0 && (
            <div className="mb-4">
              <span className="font-semibold">Video Tutorials:</span>
              <ul className="list-disc list-inside ml-4">
                {project.videoLinks.map((url: string, idx: number) => (
                  <li key={idx}>
                    <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Watch Video</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {project.githubLink && (
            <div className="mb-4">
              <span className="font-semibold">GitHub:</span> <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">View Code</a>
            </div>
          )}
          {project.simulationLink && (
            <div className="mb-4">
              <span className="font-semibold">Simulation:</span> <a href={project.simulationLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Try Simulation</a>
            </div>
          )}
          <div className="mt-8">
            <Link to="/projects" className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition">Back to Projects</Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProjectDetail; 