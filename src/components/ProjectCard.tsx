import React from 'react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  difficulty: string;
  platform: string;
  components: string[];
  image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  description,
  difficulty,
  platform,
  components,
  image
}) => {
  return (
    <Link 
      to={`/projects/${id}`}
      className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <div className="aspect-w-16 aspect-h-9 mb-4 rounded-xl overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary dark:group-hover:text-primary-light transition-colors">
        {title}
      </h3>
      
      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="px-3 py-1 bg-primary/10 text-primary dark:bg-primary-light/10 dark:text-primary-light text-sm rounded-full">
          {difficulty}
        </span>
        <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full">
          {platform}
        </span>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {components.slice(0, 3).map((component, index) => (
          <span 
            key={index}
            className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full"
          >
            {component}
          </span>
        ))}
        {components.length > 3 && (
          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full">
            +{components.length - 3} more
          </span>
        )}
      </div>
    </Link>
  );
};

export default ProjectCard; 