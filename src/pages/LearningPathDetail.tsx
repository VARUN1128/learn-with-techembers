import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import learningPaths from '../data/learningPaths.json';

const LearningPathDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const path = (learningPaths as any[]).find((p) => p.id === id);
  const [selectedTopicIdx, setSelectedTopicIdx] = useState<number>(0);

  if (!path) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Learning Path Not Found</h1>
      </div>
    );
  }

  const topics = path.topics || [];
  const selectedTopic = topics[selectedTopicIdx];
  const progress = ((selectedTopicIdx + 1) / topics.length) * 100;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{path.title}</h1>
      <p className="mb-4 text-gray-700 dark:text-gray-300">{path.description}</p>
      <div className="mb-6">
        <span className="font-semibold">Progress</span>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
          <div
            className="bg-blue-500 h-2.5 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <h2 className="text-lg font-semibold mb-4">Topics</h2>
          <ul className="space-y-2">
            {topics.map((topic: any, idx: number) => (
              <li key={idx}>
                <button
                  className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    idx === selectedTopicIdx
                      ? 'bg-blue-100 dark:bg-blue-900 font-bold'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                  onClick={() => setSelectedTopicIdx(idx)}
                >
                  {topic.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-3">
          <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl shadow-lg p-6 mb-6">
            <h2 className="text-2xl font-bold mb-2">{selectedTopic.title}</h2>
            <p className="mb-2 text-gray-700 dark:text-gray-300">{selectedTopic.description}</p>
            <div className="mb-2 text-sm text-gray-500">Duration: {selectedTopic.duration}</div>
            <div className="mb-4">{selectedTopic.content}</div>
            {selectedTopic.videoLinks && selectedTopic.videoLinks.length > 0 && (
              <div className="mb-2">
                <span className="font-semibold">Video Tutorials:</span>
                <ul>
                  {selectedTopic.videoLinks.map((url: string, idx: number) => (
                    <li key={idx}>
                      <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                        Watch on YouTube
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningPathDetail; 