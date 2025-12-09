import React from 'react';
import Card from '../components/Card';

/**
 * Past Papers page component
 * Lists past paper titles with external download links
 */
export default function PastPapers() {
  // Sample past papers data
  const pastPapers = [
    {
      id: 1,
      title: 'Math Past Paper 2022',
      url: 'https://example.com/papers/math-2022.pdf'
    },
    {
      id: 2,
      title: 'Biology Past Paper 2021',
      url: 'https://example.com/papers/biology-2021.pdf'
    },
    {
      id: 3,
      title: 'History Past Paper 2020',
      url: 'https://example.com/papers/history-2020.pdf'
    }
  ];

  return (
    <section aria-label="Past papers">
      <h1 className="text-3xl font-bold mb-6 select-none">Past Papers</h1>
      {pastPapers.length === 0 ? (
        <p className="text-gray-600">No past papers available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pastPapers.map(({ id, title, url }) => (
            <Card
              key={id}
              title={title}
              content={
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4f46e5] hover:underline break-words"
                >
                  Download PDF
                </a>
              }
            />
          ))}
        </div>
      )}
    </section>
  );
}
