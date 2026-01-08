import React from 'react';
import Navbar from './components/NavBar/Navbar';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import WhatWeBuild from './components/WhatWeBuild';
import About from './components/About/About';
import Pricing from './components/Pricing/Pricing';
import Team from './components/Team/Team';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div>
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
