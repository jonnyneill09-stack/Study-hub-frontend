import React from 'react';
import Card from '../components/Card';

/**
 * Flashcards page component
 * Displays flashcard summaries with front text as title
 * Back text is hidden (stubbed)
 */
export default function Flashcards() {
  // Sample flashcards data
  const flashcards = [
    {
      id: 1,
      front: 'Photosynthesis',
      back: 'Process by which green plants use sunlight to synthesize food from CO2 and water.'
    },
    {
      id: 2,
      front: 'Pythagorean Theorem',
      back: 'In a right triangle, a² + b² = c².'
    },
    {
      id: 3,
      front: 'Mitochondria',
      back: 'Organelle known as the powerhouse of the cell.'
    },
    {
      id: 4,
      front: 'E = mc²',
      back: 'Einstein’s equation relating energy and mass.'
    }
  ];

  return (
    <section aria-label="Flashcards">
      <h1 className="text-3xl font-bold mb-6 select-none">Flashcards</h1>
      {flashcards.length === 0 ? (
        <p className="text-gray-600">No flashcards created yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {flashcards.map(({ id, front }) => (
            <Card
              key={id}
              title={front}
              content={<p className="text-gray-700 italic">Back text hidden</p>}
            />
          ))}
        </div>
      )}
    </section>
  );
}
