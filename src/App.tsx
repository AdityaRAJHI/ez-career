import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import TrustedBy from './components/TrustedBy';
import ResumeBuilder from './components/ResumeBuilder';
import CareerTools from './components/CareerTools';
import AIPoweredFeatures from './components/AIPoweredFeatures';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <TrustedBy />
      <ResumeBuilder />
      <CareerTools />
      <AIPoweredFeatures />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
