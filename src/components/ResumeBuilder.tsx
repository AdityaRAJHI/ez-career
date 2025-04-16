import React from 'react';
import { Lightbulb, FileText, Wand, Zap } from 'lucide-react';

const ResumeBuilder: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Build Your Perfect Resume with AI
          </h2>
          <p className="text-gray-600 mb-8">
            Experience the future of resume creation with our advanced AI-powered builder
          </p>
          <div className="space-y-4">
            <div className="flex items-center p-4 bg-gray-50 rounded-lg shadow-md">
              <Wand className="h-6 w-6 text-blue-500 mr-4" />
              <div>
                <h3 className="text-lg font-semibold text-gray-700">
                  AI-Powered Resume Generation
                </h3>
                <p className="text-gray-600">
                  Create professional resumes in seconds with advanced AI technology
                </p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-gray-50 rounded-lg shadow-md">
              <FileText className="h-6 w-6 text-blue-500 mr-4" />
              <div>
                <h3 className="text-lg font-semibold text-gray-700">
                  ATS-Optimized Formatting
                </h3>
                <p className="text-gray-600">
                  Ensure your resume passes through ATS systems with optimized formatting
                </p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-gray-50 rounded-lg shadow-md">
              <Lightbulb className="h-6 w-6 text-blue-500 mr-4" />
              <div>
                <h3 className="text-lg font-semibold text-gray-700">
                  Real-Time AI Suggestions
                </h3>
                <p className="text-gray-600">
                  Get intelligent content suggestions to enhance weak sections
                </p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-gray-50 rounded-lg shadow-md">
              <Zap className="h-6 w-6 text-blue-500 mr-4" />
              <div>
                <h3 className="text-lg font-semibold text-gray-700">
                  Smart Templates
                </h3>
                <p className="text-gray-600">
                  Choose from AI-curated templates tailored for your industry
                </p>
              </div>
            </div>
          </div>
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-3 px-8 rounded-full mt-8 hover:shadow-md focus:outline-none">
            Start Building Now →
          </button>
        </div>
        <div>
          <img
            src="https://via.placeholder.com/500x600/f0f4ff/007bff?text=Resume+Mockup"
            alt="Resume Mockup"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ResumeBuilder;
