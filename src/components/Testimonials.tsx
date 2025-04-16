import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          What Our Users Say
        </h2>
        <p className="text-gray-600 mb-8">
          Join thousands of professionals accelerating their careers with AI
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md text-left">
            <div className="text-blue-500 text-xl mb-2">
              <Star className="inline-block" />
              <Star className="inline-block" />
              <Star className="inline-block" />
              <Star className="inline-block" />
              <Star className="inline-block" />
            </div>
            <p className="text-gray-700 mb-4">
              "EzCareers.ai's AI-powered insights helped me land my dream job at Google.
              The interview preparation was spot-on!"
            </p>
            <div className="flex items-center mt-4">
              <div className="bg-blue-100 text-blue-500 rounded-full h-10 w-10 flex items-center justify-center mr-3">
                S
              </div>
              <div>
                <p className="text-gray-600 font-semibold">Sarah Chen</p>
                <p className="text-gray-500 text-sm">Software Engineer at Google</p>
              </div>
            </div>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md text-left">
            <div className="text-blue-500 text-xl mb-2">
              <Star className="inline-block" />
              <Star className="inline-block" />
              <Star className="inline-block" />
              <Star className="inline-block" />
              <Star className="inline-block" />
            </div>
            <p className="text-gray-700 mb-4">
              "The AI resume optimization feature is incredible.
              My application response rate increased by 3x!"
            </p>
            <div className="flex items-center mt-4">
              <div className="bg-blue-100 text-blue-500 rounded-full h-10 w-10 flex items-center justify-center mr-3">
                M
              </div>
              <div>
                <p className="text-gray-600 font-semibold">Michael Rodriguez</p>
                <p className="text-gray-500 text-sm">Product Manager at Meta</p>
              </div>
            </div>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md text-left">
            <div className="text-blue-500 text-xl mb-2">
              <Star className="inline-block" />
              <Star className="inline-block" />
              <Star className="inline-block" />
              <Star className="inline-block" />
              <Star className="inline-block" />
            </div>
            <p className="text-gray-700 mb-4">
              "The personalized career insights are amazing.
              It's like having a career coach available 24/7."
            </p>
            <div className="flex items-center mt-4">
              <div className="bg-blue-100 text-blue-500 rounded-full h-10 w-10 flex items-center justify-center mr-3">
                E
              </div>
              <div>
                <p className="text-gray-600 font-semibold">Emily Thompson</p>
                <p className="text-gray-500 text-sm">Data Scientist at Amazon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
