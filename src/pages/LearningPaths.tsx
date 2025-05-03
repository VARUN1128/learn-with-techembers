import React from 'react';
import learningPaths from '../data/learningPaths.json';
import { Link } from 'react-router-dom';
import Card from '../components/Card';

const LearningPaths: React.FC = () => {
  // Debug: Log the imported data
  console.log('Learning Paths Data:', learningPaths);

  if (!Array.isArray(learningPaths) || learningPaths.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 text-center min-h-screen">
        <h1 className="text-3xl font-bold mb-6">Learning Paths</h1>
        <p className="text-gray-600 dark:text-gray-300">No learning paths found. Please check your data file.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Learning Paths</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {learningPaths.map((path: any) => (
            <Card key={path.id}>
              <div>
                <h2 className="text-xl font-semibold mb-2">{path.title}</h2>
                <p className="mb-3 text-gray-700 dark:text-gray-300">{path.description}</p>
                <div className="mb-2">
                  <span className="font-semibold">Topics:</span>
                  <ul className="list-disc list-inside ml-4">
                    {path.topics.map((topic: any, idx: number) => (
                      <li key={idx}>{topic.title}</li>
                    ))}
                  </ul>
                </div>
                <div className="mb-2">
                  <span className="font-semibold">Resources:</span>
                  <ul className="list-disc list-inside ml-4">
                    {path.resources.map((res: any, idx: number) => (
                      <li key={idx}>
                        <a href={res.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">{res.title}</a> ({res.type})
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-4 flex justify-end">
                <Link to={`/learning/${path.id}`} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">Start Path</Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearningPaths; 