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
import ScrollColorTransition from './components/ScrollColorTransition';
import portfolioData from './data/portfolioData.json';

function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-text-primary">
      <ScrollColorTransition />
      <Navigation data={portfolioData.personal} />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div id="home" className="section-transition hero-gradient">
          <Hero data={portfolioData.personal} highlights={portfolioData.highlights} />
        </div>
        <div id="about" className="section-transition about-gradient">
          <About data={portfolioData.about} />
        </div>
        <div id="skills" className="section-transition skills-gradient">
          <Skills data={portfolioData.skills} />
        </div>
        <div id="experience" className="section-transition experience-gradient">
          <Experience data={portfolioData.experience} />
        </div>
        <div id="projects" className="section-transition projects-gradient">
          <Projects data={portfolioData.projects} />
        </div>
        <div id="achievements" className="section-transition achievements-gradient">
          <Achievements 
            achievements={portfolioData.achievements} 
            leadership={portfolioData.leadership} 
          />
        </div>
        <div id="contact" className="section-transition contact-gradient">
          <Contact 
            personal={portfolioData.personal} 
            social={portfolioData.social} 
          />
        </div>
      </motion.main>
      
      <Footer />
    </div>
  );
}

export default App;
