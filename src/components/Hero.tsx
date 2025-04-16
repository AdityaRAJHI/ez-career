import React from 'react';
import { Rocket } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-blue-100 to-blue-50 py-20">
      <div className="container mx-auto text-center">
        <Rocket className="mx-auto h-12 w-12 text-blue-500 mb-4" />
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Land Your Dream Job with EzCareers
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Create a professional resume and cover letter in minutes. Get hired faster!
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full">
          Get Started Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
