import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm">
        <p className="mb-2 md:mb-0">&copy; {new Date().getFullYear()} Akhil Shahni. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="https://github.com/akhilcse555?tab=repositories" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/akhil-shahni-758a23185/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
            LinkedIn
          </a>
          <a href="/about" className="hover:text-gray-400 transition">About</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
