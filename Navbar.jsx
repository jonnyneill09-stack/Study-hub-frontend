import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/**
 * Navbar component
 * Purple #4f46e5 background with white text
 * Displays app logo/title and navigation/auth buttons
 * Responsive hamburger menu for mobile sidebar toggle
 */
export default function Navbar({ sidebarOpen, setSidebarOpen, isAuthenticated }) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle mobile menu dropdown for auth links
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-[#4f46e5] text-white flex items-center justify-between px-4 h-14 shadow-md fixed top-0 left-0 right-0 z-30">
      <div className="flex items-center gap-3">
        {/* Hamburger menu for mobile */}
        <button
          aria-label="Toggle sidebar"
          aria-expanded={sidebarOpen}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-md hover:bg-[#4338ca] focus:outline-none focus:ring-2 focus:ring-white md:hidden"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            {sidebarOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
        <Link to="/" className="text-xl font-semibold tracking-wide select-none">
          Study Hub
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-4">
        {isAuthenticated ? (
          <>
            <Link
              to="/"
              className="hover:underline focus:outline-none focus:ring-2 focus:ring-white rounded px-2 py-1"
            >
              Dashboard
            </Link>
            <button
              type="button"
              className="bg-white text-[#4f46e5] font-semibold px-3 py-1 rounded shadow hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="hover:underline focus:outline-none focus:ring-2 focus:ring-white rounded px-2 py-1"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="bg-white text-[#4f46e5] font-semibold px-3 py-1 rounded shadow hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white"
            >
              Register
            </Link>
          </>
        )}
      </div>

      {/* Mobile menu dropdown */}
      {!isAuthenticated && (
        <div className="md:hidden relative">
          <button
            aria-label="Toggle menu"
            onClick={toggleMenu}
            className="p-2 rounded-md hover:bg-[#4338ca] focus:outline-none focus:ring-2 focus:ring-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          {menuOpen && (
            <div
              role="menu"
              aria-orientation="vertical"
              className="absolute right-0 mt-2 w-32 bg-white text-[#4f46e5] rounded shadow-lg ring-1 ring-black ring-opacity-5"
            >
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-2 hover:bg-[#e0e7ff] focus:outline-none focus:bg-[#e0e7ff]"
                role="menuitem"
                tabIndex={0}
              >
                Login
              </Link>
              <Link
                to="/register"
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-2 hover:bg-[#e0e7ff] focus:outline-none focus:bg-[#e0e7ff]"
                role="menuitem"
                tabIndex={0}
              >
                Register
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}

Navbar.propTypes = {
  sidebarOpen: PropTypes.bool.isRequired,
  setSidebarOpen: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};
