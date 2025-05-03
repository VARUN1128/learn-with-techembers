import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`rounded-2xl shadow-lg p-6 backdrop-blur-md bg-gradient-to-br from-blue-100/80 via-blue-200/70 to-purple-100/80 dark:from-blue-900/80 dark:via-purple-900/70 dark:to-gray-900/80 border border-blue-200/30 dark:border-blue-900/40 ${className}`}
      style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)' }}
    >
      {children}
    </div>
  );
};

export default Card; 