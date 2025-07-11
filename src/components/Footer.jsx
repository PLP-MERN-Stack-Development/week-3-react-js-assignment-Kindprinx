import React from 'react';

function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow mt-auto">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} PLP Task Manager. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-4">
              <li>
                <a
                  href="https://react.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                >
                  React Docs
                </a>
              </li>
              <li>
                <a
                  href="https://tailwindcss.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                >
                  Tailwind CSS
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;