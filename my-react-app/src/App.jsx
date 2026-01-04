import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Courses from './components/NewCourses';
import Team from './components/Team';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import Pricing from './components/Pricing';
import PricingCards from './components/PricingCards';


function App() {
  return (
    <div>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Courses />
      <Pricing />
      <PricingCards />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
