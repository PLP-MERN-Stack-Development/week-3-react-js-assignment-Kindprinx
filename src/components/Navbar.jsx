import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

function Navbar() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <nav className="bg-white dark:bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold">
              PLP Task Manager
            </Link>
            <div className="ml-10 flex space-x-4">
              <Link
                to="/"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2"
              >
                Tasks
              </Link>
              <Link
                to="/api-data"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2"
              >
                API Data
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
            >
              {isDark ? '🌞' : '🌙'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;