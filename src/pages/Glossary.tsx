import React, { useState } from 'react';
import glossaryData from '../data/glossary.json';
import Card from '../components/Card';

const Glossary: React.FC = () => {
  const [search, setSearch] = useState('');
  const filtered = glossaryData.filter((item: any) =>
    item.term.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Glossary & Cheatsheets</h1>
        <div className="mb-6 flex justify-center">
          <input
            type="text"
            placeholder="Search terms..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full max-w-md px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item: any) => (
            <Card key={item.term}>
              <h2 className="text-xl font-semibold mb-2">{item.term}</h2>
              <p className="text-gray-700 dark:text-gray-300">{item.definition}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Glossary; 