import React from 'react';
import { Link } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <a href="/" className="text-2xl font-bold text-blue-500">
          EzCareers.ai
        </a>
        <div className="flex items-center space-x-6">
          <div className="group relative">
            <button className="text-gray-600 hover:text-blue-500 focus:outline-none">
              Products
            </button>
            {/* Add dropdown menu here if needed */}
          </div>
          <div className="group relative">
            <button className="text-gray-600 hover:text-blue-500 focus:outline-none">
              Resources
            </button>
            {/* Add dropdown menu here if needed */}
          </div>
          <a href="#" className="text-gray-600 hover:text-blue-500">
            AI Resume Builder
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-500">
            AI LinkedIn Review
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-500">
            Blog
          </a>
          <div className="group relative">
            <button className="text-gray-600 hover:text-blue-500 focus:outline-none">
              Apps
            </button>
            {/* Add dropdown menu here if needed */}
          </div>
          <button className="text-blue-500 hover:text-blue-700 focus:outline-none">
            Login
          </button>
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-2 px-6 rounded-full hover:shadow-md focus:outline-none">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
