import React from 'react';
import { Brain, Target, BarChart3, MessageSquare, FileEdit, Sparkles } from 'lucide-react';

const AIPoweredFeatures: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          AI-Powered Features
        </h2>
        <p className="text-gray-600 mb-8">
          Leverage cutting-edge AI technology to accelerate your career growth
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-50 rounded-lg shadow-md">
            <Brain className="h-8 w-8 text-blue-500 mb-4 mx-auto" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              AI Resume Optimization
            </h3>
            <p className="text-gray-600">
              Smart ATS resume scoring & improvements powered by advanced AI algorithms
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow-md">
            <Target className="h-8 w-8 text-blue-500 mb-4 mx-auto" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              AI-Powered Job Matching
            </h3>
            <p className="text-gray-600">
              Get personalized job recommendations based on deep AI analysis of your profile
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow-md">
            <BarChart3 className="h-8 w-8 text-blue-500 mb-4 mx-auto" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Career Progress Dashboard
            </h3>
            <p className="text-gray-600">
              Track your career growth with interactive charts and AI-driven insights
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow-md">
            <MessageSquare className="h-8 w-8 text-blue-500 mb-4 mx-auto" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              AI Interview Coaching
            </h3>
            <p className="text-gray-600">
              Practice interviews with real-time AI feedback and improvement suggestions
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow-md">
            <FileEdit className="h-8 w-8 text-blue-500 mb-4 mx-auto" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Smart Application Tracking
            </h3>
            <p className="text-gray-600">
              Efficiently track applications with AI-powered status predictions
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow-md">
            <Sparkles className="h-8 w-8 text-blue-500 mb-4 mx-auto" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              AI Career Assistant
            </h3>
            <p className="text-gray-600">
              24/7 AI career guidance and personalized development recommendations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIPoweredFeatures;
