import React from 'react';
import sensors from '../data/sensors.json';
import Card from '../components/Card';

const SensorExplorer: React.FC = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Sensor Explorer</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sensors.map((sensor: any) => (
            <Card key={sensor.id}>
              <h2 className="text-xl font-semibold mb-2">{sensor.name}</h2>
              <p className="mb-2 text-gray-700 dark:text-gray-300">{sensor.description}</p>
              {sensor.datasheetUrl && (
                <div className="mb-2">
                  <a 
                    href={sensor.datasheetUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
                  >
                    Datasheet
                  </a>
                </div>
              )}
              {sensor.codeExamples && sensor.codeExamples.length > 0 && (
                <div className="mb-2">
                  <span className="font-semibold">Code Examples:</span>
                  <ul className="list-disc list-inside ml-4">
                    {sensor.codeExamples.map((example: any, idx: number) => (
                      <li key={idx}>{example.language}</li>
                    ))}
                  </ul>
                </div>
              )}
              {sensor.videoLinks && sensor.videoLinks.length > 0 && (
                <div className="mb-2">
                  <span className="font-semibold">Video Tutorials:</span>
                  <ul className="list-disc list-inside ml-4">
                    {sensor.videoLinks.map((link: string, idx: number) => (
                      <li key={idx}>
                        <a 
                          href={link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                        >
                          Watch Tutorial
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SensorExplorer; 