import React from 'react';
import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import portfolioData from './data/portfolioData.json';

function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-text-primary">
      <Navigation data={portfolioData.personal} />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero data={portfolioData.personal} highlights={portfolioData.highlights} />
        <About data={portfolioData.about} />
        <Skills data={portfolioData.skills} />
        <Experience data={portfolioData.experience} />
        <Projects data={portfolioData.projects} />
        <Achievements 
          achievements={portfolioData.achievements} 
          leadership={portfolioData.leadership} 
        />
        <Contact 
          personal={portfolioData.personal} 
          social={portfolioData.social} 
        />
      </motion.main>
      
      <Footer />
    </div>
  );
}

export default App;
