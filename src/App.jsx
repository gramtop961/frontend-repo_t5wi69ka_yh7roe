import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Showcase from './components/Showcase';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a12] antialiased">
      <Hero />
      <Features />
      <Showcase />
      <Pricing />
      <Footer />
    </div>
  );
}
