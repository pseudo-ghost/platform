import React from 'react';
import Navbar from './components/NavBar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Features from './components/Features/Features';
import Courses from './components/NewCourses/NewCourses';
import Team from './components/Team/Team';
import Footer from './components/Footer/Footer';
import ScrollProgress from './components/ScrollProgress/ScrollProgress';
import Pricing from './components/Pricing/Pricing';
import PricingCards from './components/PricingCards/PricingCards';


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
