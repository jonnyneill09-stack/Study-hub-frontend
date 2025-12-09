import React from 'react';
import Card from '../components/Card';

/**
 * Dashboard page component
 * Displays overview cards for Notes, Flashcards, Past Papers counts
 * Uses static dummy data for demonstration
 */
export default function Dashboard() {
  // Static demo data
  const notesCount = 12;
  const flashcardsCount = 34;
  const pastPapersCount = 5;

  return (
    <section aria-label="Dashboard overview">
      <h1 className="text-3xl font-bold mb-6 select-none">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          title="Your Notes"
          content={<p className="text-4xl font-extrabold text-[#4f46e5]">{notesCount}</p>}
          footer={<p>You have {notesCount} notes saved.</p>}
        />
        <Card
          title="Flashcards"
          content={<p className="text-4xl font-extrabold text-[#4f46e5]">{flashcardsCount}</p>}
          footer={<p>You have {flashcardsCount} flashcards created.</p>}
        />
        <Card
          title="Past Papers"
          content={<p className="text-4xl font-extrabold text-[#4f46e5]">{pastPapersCount}</p>}
          footer={<p>You have {pastPapersCount} past papers available.</p>}
        />
      </div>
    </section>
  );
}
