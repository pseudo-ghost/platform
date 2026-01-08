import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Team from './components/Team';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import Pricing from './components/Pricing';
import WhatWeBuild from './components/WhatWeBuild';


function App() {
  return (
    <div>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Features />
      <WhatWeBuild />
      <Pricing />
      <About />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
