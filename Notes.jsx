import React from 'react';
import Card from '../components/Card';

/**
 * Notes page component
 * Renders list of note cards with sample titles and excerpts
 */
export default function Notes() {
  // Sample notes data
  const notes = [
    {
      id: 1,
      title: 'Biology - Cell Structure',
      excerpt:
        'Cells are the basic units of life. They consist of the nucleus, cytoplasm, and membrane...'
    },
    {
      id: 2,
      title: 'History - World War II',
      excerpt:
        'World War II was a global conflict that lasted from 1939 to 1945, involving most of the world’s nations...'
    },
    {
      id: 3,
      title: 'Math - Calculus Basics',
      excerpt:
        'Calculus involves derivatives and integrals. The derivative represents the rate of change...'
    },
    {
      id: 4,
      title: 'English Literature - Shakespeare',
      excerpt:
        'William Shakespeare was an English playwright known for works like Hamlet, Macbeth, and Othello...'
    }
  ];

  return (
    <section aria-label="Your notes">
      <h1 className="text-3xl font-bold mb-6 select-none">Your Notes</h1>
      {notes.length === 0 ? (
        <p className="text-gray-600">You have no notes saved yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.map(({ id, title, excerpt }) => (
            <Card
              key={id}
              title={title}
              content={<p className="text-gray-700">{excerpt}</p>}
            />
          ))}
        </div>
      )}
    </section>
  );
}
