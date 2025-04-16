import React from 'react';
import { Scan, FileText, Linkedin, CheckCheck } from 'lucide-react';

const CareerTools: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Powerful Career Tools
        </h2>
        <p className="text-gray-600 mb-8">
          Leverage AI-powered tools to accelerate your career growth
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <Scan className="h-8 w-8 text-blue-500 mb-4 mx-auto" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              ATS Score Analysis
            </h3>
            <p className="text-gray-600">
              Get vital job search assistance for navigating modern job vacancies.
              Improve your job search success by understanding your resume score.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <FileText className="h-8 w-8 text-blue-500 mb-4 mx-auto" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              AI Resume Builder
            </h3>
            <p className="text-gray-600">
              Build your resume on our dedicated AI career platform.
              Receive specific AI powered career guidance for better career management.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <Linkedin className="h-8 w-8 text-blue-500 mb-4 mx-auto" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              LinkedIn Profile Review
            </h3>
            <p className="text-gray-600">
              Enhance visibility through detailed Profile Optimization.
              Access key professional development tools to create a profile that acts as a career advancement platform.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <CheckCheck className="h-8 w-8 text-blue-500 mb-4 mx-auto" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Career Assessment Tool
            </h3>
            <p className="text-gray-600">
              Map out your future with focused Career Path Planning.
              This tool facilitates strategic career planning and supports holistic career and life management.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerTools;
