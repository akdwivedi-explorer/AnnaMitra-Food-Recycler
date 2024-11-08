import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="text-center font-normal">
        <p>&copy; 2024 Food Wastage Management System. All Rights Reserved.</p>
        <p className='font-semibold mt-4'>Developed by TecStatic</p>
        <div className="mt-4 space-x-4">
          <a
            href="https://github.com/akdwivedi-explorer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            GitHub
          </a>
          <a
            href="/privacy-policy"
            className="text-white hover:text-gray-300"
          >
            Privacy Policy
          </a>
          <a
            href="/terms-of-service"
            className="text-white hover:text-gray-300"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
