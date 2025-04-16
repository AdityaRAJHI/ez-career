import React from 'react';

const TrustedBy: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-blue-500 mb-4">
          Trusted by Industry Leaders
        </h2>
        <p className="text-gray-600 mb-8">
          Our users have secured positions at top companies worldwide
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8">
          <img
            src="https://via.placeholder.com/100x30/007bff/FFFFFF?text=Microsoft"
            alt="Microsoft"
            className="h-8"
          />
          <img
            src="https://via.placeholder.com/100x30/ff9900/FFFFFF?text=Amazon"
            alt="Amazon"
            className="h-8"
          />
          <img
            src="https://via.placeholder.com/100x30/007bff/FFFFFF?text=Intel"
            alt="Intel"
            className="h-8"
          />
          <img
            src="https://via.placeholder.com/100x30/007bff/FFFFFF?text=IBM"
            alt="IBM"
            className="h-8"
          />
          <img
            src="https://via.placeholder.com/100x30/ff0000/FFFFFF?text=Oracle"
            alt="Oracle"
            className="h-8"
          />
          <img
            src="https://via.placeholder.com/100x30/ff0000/FFFFFF?text=Tesla"
            alt="Tesla"
            className="h-8"
          />
          <img
            src="https://via.placeholder.com/100x30/ff0000/FFFFFF?text=Netflix"
            alt="Netflix"
            className="h-8"
          />
        </div>
        <div className="mt-8">
          <button className="bg-white text-gray-600 font-semibold py-2 px-6 rounded-full hover:shadow-md focus:outline-none">
            Helped 10,000+ professionals land their dream jobs
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
