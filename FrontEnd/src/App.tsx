import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Categories } from './components/Categories';
import { FeaturedSkills } from './components/FeaturedSkills';
import { HowItWorks } from './components/HowItWorks';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Categories />
      <FeaturedSkills />
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default App;