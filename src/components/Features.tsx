import React from 'react';
import { CheckCircle, Edit, Layout } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-12">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-50 rounded-lg shadow-md">
            <CheckCircle className="h-8 w-8 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Professional Templates
            </h3>
            <p className="text-gray-600">
              Choose from a wide range of professionally designed resume templates.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow-md">
            <Edit className="h-8 w-8 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Easy to Use Editor
            </h3>
            <p className="text-gray-600">
              Our intuitive editor makes it easy to create and customize your resume.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow-md">
            <Layout className="h-8 w-8 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Optimized Layouts
            </h3>
            <p className="text-gray-600">
              Ensure your resume is ATS-friendly with our optimized layouts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
