import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

/**
 * Sidebar component
 * Vertical navigation menu with links to pages
 * White background, shadow, rounded corners
 * Collapsible on mobile using sidebarOpen state
 */
export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  // Close sidebar on link click (mobile)
  const handleLinkClick = () => {
    if (sidebarOpen) setSidebarOpen(false);
  };

  const navLinkClass = ({ isActive }) =>
    `block px-4 py-3 rounded-md font-semibold transition-colors ${
      isActive ? 'bg-[#4f46e5] text-white' : 'text-gray-700 hover:bg-gray-200'
    }`;

  return (
    <>
      {/* Overlay when sidebar is open on mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed top-14 left-0 bottom-0 w-64 bg-white shadow-lg rounded-tr-lg rounded-br-lg z-30 transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static md:shadow-none md:rounded-none`}
        aria-label="Sidebar Navigation"
      >
        <nav className="h-full flex flex-col p-4 space-y-2">
          <NavLink to="/" className={navLinkClass} onClick={handleLinkClick} end>
            Dashboard
          </NavLink>
          <NavLink to="/notes" className={navLinkClass} onClick={handleLinkClick}>
            Notes
          </NavLink>
          <NavLink to="/flashcards" className={navLinkClass} onClick={handleLinkClick}>
            Flashcards
          </NavLink>
          <NavLink to="/past-papers" className={navLinkClass} onClick={handleLinkClick}>
            Past Papers
          </NavLink>
        </nav>
      </aside>
    </>
  );
}

Sidebar.propTypes = {
  sidebarOpen: PropTypes.bool.isRequired,
  setSidebarOpen: PropTypes.func.isRequired
};
