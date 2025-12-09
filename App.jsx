import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

import Dashboard from './pages/Dashboard';
import Notes from './pages/Notes';
import Flashcards from './pages/Flashcards';
import PastPapers from './pages/PastPapers';
import Login from './pages/Login';
import Register from './pages/Register';

/**
 * Main App component
 * Layout includes Navbar at top, Sidebar on left, main content on right
 * Uses React Router for page navigation
 * Sidebar is collapsible on mobile with toggle state
 */
export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // Stub for auth state, can be extended later
  const [isAuthenticated] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} isAuthenticated={isAuthenticated} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main
          className="flex-1 overflow-auto p-6"
          style={{ minHeight: 'calc(100vh - 56px)' }}
          aria-label="Main content"
        >
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/flashcards" element={<Flashcards />} />
            <Route path="/past-papers" element={<PastPapers />} />
            <Route path="/login" element={isAuthenticated ? <Navigate to="/" replace /> : <Login />} />
            <Route path="/register" element={isAuthenticated ? <Navigate to="/" replace /> : <Register />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
