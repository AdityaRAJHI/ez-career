import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 py-4 text-center text-gray-400">
      <p>&copy; {new Date().getFullYear()} EzCareers.ai. All rights reserved.</p>
      <a href="/terms" className="text-gray-400 hover:text-white ml-4">Terms of Service</a>
      <a href="/privacy" className="text-gray-400 hover:text-white ml-4">Privacy Policy</a>
    </footer>
  );
};

export default Footer;
